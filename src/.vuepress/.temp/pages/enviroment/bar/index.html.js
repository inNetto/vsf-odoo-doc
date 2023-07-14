export const data = JSON.parse("{\"key\":\"v-4ba0903b\",\"path\":\"/enviroment/bar/\",\"title\":\"Bar feature\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Bar feature\",\"icon\":\"lightbulb\",\"description\":\"Introduction We support bar feature, ... Details baz (baz.md); ...;\"},\"headers\":[{\"level\":2,\"title\":\"Introduction\",\"slug\":\"introduction\",\"link\":\"#introduction\",\"children\":[]},{\"level\":2,\"title\":\"Details\",\"slug\":\"details\",\"link\":\"#details\",\"children\":[]}],\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"enviroment/bar/README.md\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
