import { createSlice } from "@reduxjs/toolkit"

import { fetchGlobalFeed } from "./api"

import { Article } from "../../../types/types"

type ArticlesState = {
  globalFeed: Article[]
  globalFeedCount: number
}

const initialState: ArticlesState = {
  globalFeed: [],
  globalFeedCount: 0
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
  }
})

export default articlesSlice.reducer
