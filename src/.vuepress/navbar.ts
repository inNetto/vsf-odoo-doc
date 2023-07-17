import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/", 
  "/introduction/demo", 
  {
    text: "Getting Started",
    icon: "plug",
    prefix: "/introduction/quick-start/",
    children: [
      {
        text: "Starting new",            
        prefix: "/quick-start/",
        link: "starting-new",
        children: [],
      },
      {
        text: "Enviroment test",        
        prefix: "/quick-start/",
        link: "testing-local",
        children: [],
      },
    ],
  },
  {
    text: "VSF Docs",
    icon: "book",
    link: "https://docs.vuestorefront.io/v2/",
  },  
]);
