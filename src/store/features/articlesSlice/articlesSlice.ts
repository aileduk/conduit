import { createSlice } from "@reduxjs/toolkit"

import { fetchGlobalFeed, fetchPopularTags } from "./api"

import { Article } from "../../../types/types"

type ArticlesState = {
  globalFeed: Article[]
  globalFeedCount: number
  tagList: string[]
}

const initialState: ArticlesState = {
  globalFeed: [],
  globalFeedCount: 0,
  tagList: []
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
  }
})

export default articlesSlice.reducer
