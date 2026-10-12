/*
 * Autodun cookie consent.
 *
 * Google Analytics (G-ZPK0SR60XR) is never loaded until the visitor clicks
 * "Accept". The choice is stored in the first-party cookie "cookie_consent"
 * ("accepted" | "rejected", max-age 6 months, Domain=.autodun.com on autodun.com hosts).
 *
 * Static pages: <script src="/consent.js" defer></script> — this script loads
 * gtag.js itself after consent.
 * SPA: <script src="/consent.js" data-ga="external"></script> — the app loads
 * GA (react-ga4) itself and listens for the "autodun:consent" event.
 *
 * Any element with [data-cookie-settings] reopens the banner.
 */
(function () {
  var GA_ID = "G-ZPK0SR60XR";
  var COOKIE = "cookie_consent";
  var MAX_AGE = 60 * 60 * 24 * 182; // ~6 months
  var script = document.currentScript;
  var externalGA = script && script.getAttribute("data-ga") === "external";
  var gaLoaded = false;
  var banner = null;

  function getConsent() {
    var m = document.cookie.match(/(?:^|;\s*)cookie_consent=(accepted|rejected)/);
    return m ? m[1] : null;
  }

  // Share one choice across autodun.com and its subdomains (ev, mot, ai).
  // Elsewhere (localhost, preview URLs) the cookie stays host-only.
  var host = location.hostname;
  var cookieDomain =
    host === "autodun.com" || /\.autodun\.com$/.test(host) ? "; Domain=.autodun.com" : "";

  function setConsent(value) {
    var secure = location.protocol === "https:" ? "; Secure" : "";
    // Drop any older host-only copy so it can't shadow the shared cookie.
    if (cookieDomain) document.cookie = COOKIE + "=; Max-Age=0; Path=/";
    document.cookie =
      COOKIE + "=" + value + "; Max-Age=" + MAX_AGE + "; Path=/" + cookieDomain + "; SameSite=Lax" + secure;
  }

  function clearGACookies() {
    var host = location.hostname;
    var domains = ["", host, "." + host];
    var parts = host.split(".");
    if (parts.length > 2) domains.push("." + parts.slice(-2).join("."));
    document.cookie.split(";").forEach(function (c) {
      var name = c.split("=")[0].trim();
      if (name === "_ga" || name.indexOf("_ga_") === 0 || name === "_gid" || name === "_gat") {
        domains.forEach(function (d) {
          document.cookie = name + "=; Max-Age=0; Path=/" + (d ? "; Domain=" + d : "");
        });
      }
    });
  }

  function loadGA() {
    if (gaLoaded || externalGA) return;
    gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(s);
  }

  function choose(value) {
    var previous = getConsent();
    setConsent(value);
    hideBanner();
    if (value === "accepted") {
      window["ga-disable-" + GA_ID] = false;
      loadGA();
    } else {
      window["ga-disable-" + GA_ID] = true;
      clearGACookies();
    }
    try {
      window.dispatchEvent(new CustomEvent("autodun:consent", { detail: value }));
    } catch (e) {
      /* ignore */
    }
    // Withdrawing consent after GA has run: reload so no GA code stays in memory.
    if (value === "rejected" && previous === "accepted" && (gaLoaded || externalGA)) {
      location.reload();
    }
  }

  function injectStyles() {
    if (document.getElementById("cc-style")) return;
    var css =
      "#cc-banner{position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;max-width:560px;margin:0 auto;" +
      "background:#111f33;color:#e2eaf4;border:1px solid rgba(255,255,255,0.12);border-radius:12px;padding:16px 18px;" +
      "box-shadow:0 8px 32px rgba(0,0,0,0.45);font:14px/1.5 Inter,system-ui,-apple-system,Segoe UI,sans-serif}" +
      "#cc-banner p{margin:0 0 12px;color:#c4d0dd}#cc-banner a{color:#00d48a}" +
      "#cc-banner .cc-actions{display:flex;gap:10px}" +
      "#cc-banner button{flex:1;min-height:40px;padding:8px 14px;border-radius:8px;font-family:inherit;font-size:14px;font-weight:600;cursor:pointer;" +
      "background:#1b2e47;color:#ffffff;border:1px solid rgba(255,255,255,0.25)}" +
      "#cc-banner button:hover,#cc-banner button:focus-visible{background:#24405f;outline:2px solid #00d48a;outline-offset:1px}";
    var style = document.createElement("style");
    style.id = "cc-style";
    style.textContent = css;
    document.head.appendChild(style);
  }

  function showBanner() {
    if (!document.body) return;
    injectStyles();
    if (banner) {
      banner.style.display = "";
    } else {
      banner = document.createElement("div");
      banner.id = "cc-banner";
      banner.setAttribute("role", "dialog");
      banner.setAttribute("aria-live", "polite");
      banner.setAttribute("aria-label", "Cookie consent");
      banner.innerHTML =
        "<p>We'd like to use Google Analytics cookies to understand how the site is used. " +
        "They are only set if you accept. See our <a href=\"/privacy\">privacy policy</a>.</p>" +
        '<div class="cc-actions">' +
        '<button type="button" data-cc="rejected">Reject</button>' +
        '<button type="button" data-cc="accepted">Accept</button>' +
        "</div>";
      banner.addEventListener("click", function (e) {
        var v = e.target && e.target.getAttribute && e.target.getAttribute("data-cc");
        if (v) choose(v);
      });
      document.body.appendChild(banner);
    }
  }

  function hideBanner() {
    if (banner) banner.style.display = "none";
  }

  window.AutodunConsent = {
    get: getConsent,
    open: showBanner,
  };

  document.addEventListener("click", function (e) {
    var el = e.target && e.target.closest ? e.target.closest("[data-cookie-settings]") : null;
    if (el) {
      e.preventDefault();
      showBanner();
    }
  });

  var consent = getConsent();
  if (consent === "accepted") {
    loadGA();
  } else {
    if (consent === "rejected") window["ga-disable-" + GA_ID] = true;
    if (!consent) {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", showBanner);
      } else {
        showBanner();
      }
    }
  }
})();
