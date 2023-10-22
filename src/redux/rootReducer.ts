import { combineReducers } from '@reduxjs/toolkit'
import articlesSlice from './features/articlesSlice'

export const rootReducer = combineReducers({
  articles: articlesSlice
})
