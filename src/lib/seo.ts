/**
 * Lightweight per-page SEO helper for React SPA.
 * Call inside useEffect on each page component.
 */
export function setSEO({
  title,
  description,
  keywords,
  canonical,
  ogUrl,
}: {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogUrl?: string;
}) {
  document.title = title;

  const setMeta = (selector: string, content: string) => {
    let el = document.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta") as HTMLMetaElement;
      const [attr, val] = selector.replace("meta[", "").replace("]", "").split('="');
      el.setAttribute(attr.replace(/"/g, ""), val.replace(/"/g, ""));
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  };

  setMeta('meta[name="description"]', description);
  if (keywords) setMeta('meta[name="keywords"]', keywords);
  setMeta('meta[name="robots"]', "index, follow");
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:type"]', "website");
  if (ogUrl) setMeta('meta[property="og:url"]', ogUrl);
  setMeta('meta[name="twitter:card"]', "summary_large_image");

  if (canonical) {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link") as HTMLLinkElement;
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical;
  }
}
