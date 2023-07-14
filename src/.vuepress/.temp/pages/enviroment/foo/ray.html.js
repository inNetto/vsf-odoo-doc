export const data = JSON.parse("{\"key\":\"v-4a0f7e52\",\"path\":\"/enviroment/foo/ray.html\",\"title\":\"Ray\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Ray\",\"icon\":\"circle-info\",\"description\":\"Feature details here.\"},\"headers\":[],\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"enviroment/foo/ray.md\",\"autoDesc\":true}")

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
