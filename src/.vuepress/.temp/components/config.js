import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "/home/netto/projetos/odooJob/hope/doc/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useScriptTag } from "/home/netto/projetos/odooJob/hope/doc/node_modules/@vueuse/core/index.mjs";
import Badge from "/home/netto/projetos/odooJob/hope/doc/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/home/netto/projetos/odooJob/hope/doc/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "/home/netto/projetos/odooJob/hope/doc/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "/home/netto/projetos/odooJob/hope/doc/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(`https://kit.fontawesome.com/8fa2cdfc02.js`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
