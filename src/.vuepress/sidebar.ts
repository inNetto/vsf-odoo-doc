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
          text: "Quick Start",
          prefix: "introduction/",
          link: "start",
          children: "structure",
        },       
        {
          text: "Demo",
          prefix: "demo/",
          link: "demo",
          children: "structure",
        },
          
      ]
    },
    {
      text: "Enviroment",
      icon: "gears",
      prefix: "enviroment/",
      children: [
        {
          text: "Features",
          prefix: "features/",
          link: "features",
          children: "structure",
        },
        
        {
          text: "Configuration",
          prefix: "introduction/",
          link: "configuration",
          children: "structure",
        },
        {
          text: "Ecosystem",
          prefix: "eco/",
          link: "eco",
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
          text: "Image handle",
          prefix: "guides/",
          link: "imageHandle",
          children: "structure",
        },
        
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
