import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", 
  "/introduction/start", 
  "/enviroment/configuration", 
  // {
  //   text: "Guide",
  //   icon: "lightbulb",
  //   prefix: "/guide/",
  //   children: [
  //     {
  //       text: "Bar",
  //       icon: "lightbulb",
  //       prefix: "bar/",
  //       children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //     {
  //       text: "Foo",
  //       icon: "lightbulb",
  //       prefix: "foo/",
  //       children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
  //     },
  //   ],
  // },
  {
    text: "VSF Docs",
    icon: "book",
    link: "https://docs.vuestorefront.io/v2/",
  },
]);
