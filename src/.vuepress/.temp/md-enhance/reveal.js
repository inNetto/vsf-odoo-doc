import { reveal, revealMarkdown, revealHighlight, revealMath, revealSearch, revealNotes, revealZoom } from "/home/netto/projetos/odooJob/hope/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export const useReveal = () => [reveal(), revealMarkdown(), revealHighlight(), revealMath(), revealSearch(), revealNotes(), revealZoom()];
