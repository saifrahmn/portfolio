// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Saif Rahman";
export const SITE_DESCRIPTION =
  "Building world a better place to live in";
export const TWITTER_HANDLE = "@saif_rahmn";
export const MY_NAME = "Saif Rahman";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
