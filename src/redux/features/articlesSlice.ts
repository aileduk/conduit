import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import { IArticle, IArticles, ITags } from '@/types/articles'
import { Endpoints, URL } from '@/app/config/settings'

export const getGlobalArticles = createAsyncThunk<IArticles, undefined, { rejectValue: string }>(
  'articles/getGlobalArticles',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${URL}${Endpoints.Articles}`)

    if (!response.ok) return rejectWithValue('Server error!')

    const result = await response.json()
    return result
  }
)
export const getAllTags = createAsyncThunk<ITags, undefined, { rejectValue: string }>(
  'articles/getAllTags',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${URL}${Endpoints.Tags}`)

    if (!response.ok) return rejectWithValue('Server error!')

    const result = await response.json()
    return result
  }
)

type IArticlesState = {
  globalArticles: IArticle[]
  allTags: string[]
  globalArticlesCount: number
  articleLoadingStatus: string | null
  tagsLoadingStatus: string | null
  error: string | null | undefined
}

const initialState: IArticlesState = {
  globalArticles: [],
  allTags: [],
  globalArticlesCount: 0,
  articleLoadingStatus: null,
  tagsLoadingStatus: null,
  error: null
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getGlobalArticles.pending, state => {
        state.articleLoadingStatus = 'loading'
      })
      .addCase(getGlobalArticles.fulfilled, (state, actions) => {
        state.globalArticles = actions.payload.articles
        state.globalArticlesCount = actions.payload.articlesCount
        state.articleLoadingStatus = 'success'
      })
      .addCase(getGlobalArticles.rejected, (state, actions) => {
        state.articleLoadingStatus = 'error'
        state.error = actions.payload
      })
      .addCase(getAllTags.pending, state => {
        state.tagsLoadingStatus = 'loading'
      })
      .addCase(getAllTags.fulfilled, (state, actions) => {
        state.allTags = actions.payload.tags
        state.tagsLoadingStatus = 'success'
      })
      .addCase(getAllTags.rejected, (state, actions) => {
        state.tagsLoadingStatus = 'error'
        state.error = actions.payload
      })
  }
})

export const {} = articlesSlice.actions
export default articlesSlice.reducer
