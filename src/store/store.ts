import { configureStore } from "@reduxjs/toolkit"

import articlesSlice from "./features/articlesSlice/articlesSlice"

const store = configureStore({
  reducer: {
    articles: articlesSlice
  }
})

export default store
