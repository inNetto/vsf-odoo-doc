import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "Docs",
  description: "VSF + ODOO integration",
 plugins: [
    searchPlugin({
      // your options
    }),
  ],

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
