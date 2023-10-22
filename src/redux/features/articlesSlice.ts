import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'

import { IArticle, IArticles } from '@/types/articles'
import { Endpoints, URL } from '@/app/config/settings'

export const getGlobalArticles = createAsyncThunk<IArticles>(
  'articles/getGlobalArticles',
  async (_, { rejectWithValue }) => {
    const response = await fetch(`${URL}${Endpoints.Articles}`, {
      mode: 'no-cors'
    })
    const result = await response.json()

    return result
  }
)

type IArticlesState = {
  globalArticles: IArticle[]
}

const initialState: IArticlesState = {
  globalArticles: []
}

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getGlobalArticles.fulfilled, (state, actions) => {
      state.globalArticles = actions.payload.articles
    })
  }
})

export const {} = articlesSlice.actions
export default articlesSlice.reducer
