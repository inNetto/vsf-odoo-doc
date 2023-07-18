import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "Introduction",
      icon: "laptop-code",
      prefix: "introduction/",      
      children: [
        {
          text: "Demo",
          prefix: "demo/",
          link: "demo",
          children: "structure",
        },
        {
          text: "Quick Start",
          prefix: "quick-start/",  
          children: [{
              text: "Integration test",
              prefix: "testing-local/",
              link: "testing-local",
              children: "structure",
            },
            {
              text: "New project",
              prefix: "starting-new/",
              link: "starting-new",
              children: "structure",
            }
          ],
        } 
      ]
    },
    {    
      text: "Configuration", 
      icon: "gear",
      prefix: "configuration/",                
      children:[
        {
          text: "Docker-compose",
          prefix: "docker-compose/",
          link: "docker-compose",
          children: "structure",
        },
        {
          text: "Image handle",
          prefix: "assets/",
          link: "assets",
          children: "structure",
        },
        {
          text: "Envs Variables",
          prefix: "envs/",
          link: "envs",
          children: "structure",
        },
        {
          text: "Middleware",
          prefix: "middleware/",
          link: "middleware",
          children: "structure",
        },
        {
          text: "Routes",
          prefix: "routes/",
          link: "routes",
          children: "structure",
        }, 
      ],
    },   
    {
      text: "Guides",
      icon: "circle-info",
      prefix: "guides/",
      collapsible: true,
      children: [        
        
        {
          text: "Custom queries",
          prefix: "guides/",
          link: "customQueries",
          children: "structure",
        },
        {
          text: "Custom API client",
          prefix: "guides/",
          link: "customApis",
          children: "structure",
        },
        {
          text: "Payment",
          prefix: "payment/",
          link: "payment",
          children: "structure",
        },
      ],
    },  
    {
      text: "Composables",
      icon: "th-large",
      prefix: "composables/",
      collapsible: true,
      children: [
        {
          text: "useCart",
          prefix: "composables/",
          link: "useCart",
          children: "structure",
        },
        
        {
          text: "useCategory",
          prefix: "composables/",
          link: "useCategory",
          children: "structure",
        },
        {
          text: "useFacet",
          prefix: "composables/",
          link: "useFacet",
          children: "structure",
        },        
        {
          text: "useShipping",
          prefix: "composables/",
          link: "useShipping",
          children: "structure",
        },
        {
          text: "useUser",
          prefix: "composables/",
          link: "useUser",
          children: "structure",
        },
        {
          text: "useUserBilling",
          prefix: "composables/",
          link: "useUserBilling",
          children: "structure",
        },
        {
          text: "useWishList",
          prefix: "composables/",
          link: "useWishList",
          children: "structure",
        },
        {
          text: "useOrder",
          prefix: "composables/",
          link: "useOrder",
          children: "structure",
        },
        {
          text: "usePassword",
          prefix: "composables/",
          link: "usePassword",
          children: "structure",
        },
        {
          text: "useProductVariant",
          prefix: "composables/",
          link: "useProductVariant",
          children: "structure",
        },
        {
          text: "useCountrySearch",
          prefix: "composables/",
          link: "useCountrySearch",
          children: "structure",
        },
        {
          text: "customQueries",
          prefix: "composables/",
          link: "customQueries",
          children: "structure",
        },       
      ],
    },  
    {
      text: "Reference",
      icon: "hashtag",
      prefix: "reference/",
      collapsible: true,
      children: [
        {
          text: "Feature List",
          prefix: "reference/",
          link: "featureList",
          children: "structure",
        },
        
        {
          text: "Api List",
          prefix: "reference/",
          link: "apiList",
          children: "structure",
        },      
      ],
    },  
  ],
});
