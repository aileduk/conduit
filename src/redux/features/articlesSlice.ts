import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import { ArticlesParamsValues, DownloadStatus, IArticle, IArticles, ITags } from '@/types/articles'
import { ArticlesParams, Endpoints, URL } from '@/app/config/settings'
import { NUMBER_OF_ARTICLES_PER_PAGE } from '@/consts'

export const getGlobalArticles = createAsyncThunk<IArticles, ArticlesParamsValues, { rejectValue: string }>(
  'articles/getGlobalArticles',
  async (params, { rejectWithValue }) => {
    const tagParam = params.tag ? `${ArticlesParams.Tag}=${params.tag}` : ''

    const response = await fetch(
      `${URL}${Endpoints.Articles}?${ArticlesParams.Limit}=${NUMBER_OF_ARTICLES_PER_PAGE}&${ArticlesParams.Offset}=${
        NUMBER_OF_ARTICLES_PER_PAGE * params.page
      }&${tagParam}`
    )

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
  globalArticlesDownloadStatus: string | null
  tagsDownloadStatus: string | null
  error: string | null | undefined
  selectedTag: string | null
  page: number
}

const initialState: IArticlesState = {
  globalArticles: [],
  allTags: [],
  globalArticlesCount: 0,
  globalArticlesDownloadStatus: null,
  tagsDownloadStatus: null,
  error: null,
  selectedTag: null,
  page: 0
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    tagSelection(state, actions: PayloadAction<string | null>) {
      state.selectedTag = actions.payload
    },
    switchingPages(state, actions: PayloadAction<number>) {
      state.page = actions.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getGlobalArticles.pending, state => {
        state.globalArticlesDownloadStatus = DownloadStatus.Loading
      })
      .addCase(getGlobalArticles.fulfilled, (state, actions) => {
        state.globalArticlesDownloadStatus = DownloadStatus.Success
        state.globalArticles = actions.payload.articles
        state.globalArticlesCount = actions.payload.articlesCount
      })
      .addCase(getGlobalArticles.rejected, (state, actions) => {
        state.globalArticlesDownloadStatus = DownloadStatus.Error
        state.error = actions.payload
      })
      .addCase(getAllTags.pending, state => {
        state.tagsDownloadStatus = DownloadStatus.Loading
      })
      .addCase(getAllTags.fulfilled, (state, actions) => {
        state.allTags = actions.payload.tags
        state.tagsDownloadStatus = DownloadStatus.Success
      })
      .addCase(getAllTags.rejected, (state, actions) => {
        state.tagsDownloadStatus = DownloadStatus.Error
        state.error = actions.payload
      })
  }
})

export const { tagSelection, switchingPages } = articlesSlice.actions
export default articlesSlice.reducer
