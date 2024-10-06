import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import {
  fetchArticleDetails,
  fetchAuthorFeed,
  fetchCommentsForArticle,
  fetchGlobalFeed,
  fetchPopularTags,
  fetchUserDetails
} from "./api"

import { Article, Author, Comment } from "../../../types/types"

type ArticlesState = {
  globalFeed: Article[]
  globalFeedCount: number
  tagList: string[]
  articleDetails: Article | null
  userDetails: Author | null
  authorFeed: Article[]
  authorFeedCount: number
  offset: number
  comments: Comment[]
  tag: string
}

const initialState: ArticlesState = {
  globalFeed: [],
  globalFeedCount: 0,
  tagList: [],
  articleDetails: null,
  userDetails: null,
  authorFeed: [],
  authorFeedCount: 0,
  offset: 0,
  comments: [],
  tag: ""
}

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setOffset(state, actions: PayloadAction<number>) {
      state.offset = actions.payload
    }
  },
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
    builder.addCase(fetchUserDetails.fulfilled, (state, actions) => {
      state.userDetails = actions.payload
    })
    builder.addCase(fetchAuthorFeed.fulfilled, (state, actions) => {
      state.authorFeed = actions.payload.articles
      state.authorFeedCount = actions.payload.articlesCount
    })
    builder.addCase(fetchCommentsForArticle.fulfilled, (state, actions) => {
      state.comments = actions.payload
    })
  }
})

export default articlesSlice.reducer
export const { setOffset } = articlesSlice.actions
