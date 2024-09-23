import { createSlice } from "@reduxjs/toolkit"

import { fetchArticleDetails, fetchGlobalFeed, fetchPopularTags } from "./api"

import { Article } from "../../../types/types"

type ArticlesState = {
  globalFeed: Article[]
  globalFeedCount: number
  tagList: string[]
  articleDetails: Article | null
}

const initialState: ArticlesState = {
  globalFeed: [],
  globalFeedCount: 0,
  tagList: [],
  articleDetails: null
}

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchGlobalFeed.fulfilled, (state, actions) => {
      state.globalFeed = actions.payload.articles
      state.globalFeedCount = actions.payload.articlesCount
    })
    builder.addCase(fetchPopularTags.fulfilled, (state, actions) => {
      state.tagList = actions.payload
    })
    builder.addCase(fetchArticleDetails.fulfilled, (state, actions) => {
      state.articleDetails = actions.payload
    })
  }
})

export default articlesSlice.reducer
