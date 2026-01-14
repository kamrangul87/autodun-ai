import ReactGA from "react-ga4";

export const GA_ID = "G-ZPK0SR60XR";

export const initGA = () => {
  ReactGA.initialize(GA_ID);
};

export const trackPageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};
