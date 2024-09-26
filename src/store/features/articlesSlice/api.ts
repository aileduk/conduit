import { createAsyncThunk } from "@reduxjs/toolkit"

import { URL, UrlEndpoints } from "../../../consts/endpoints"
import { Article, Author, GlobalFeedResponse } from "../../../types/types"

export const fetchGlobalFeed = createAsyncThunk<GlobalFeedResponse, undefined, { rejectValue: string }>(
  "articles/fetchGlobalFeed",
  async function (_, { rejectWithValue }) {
    const response = await fetch(`${URL}${UrlEndpoints.Articles}`)

    if (!response.ok) {
      return rejectWithValue("Server error!")
    }

    const result = await response.json()

    return result
  }
)

export const fetchPopularTags = createAsyncThunk<string[], undefined, { rejectValue: string }>(
  "articles/fetchPopularTags",
  async function (_, { rejectWithValue }) {
    const response = await fetch(`${URL}${UrlEndpoints.Tags}`)

    if (!response.ok) {
      return rejectWithValue("Server error!")
    }

    const result = await response.json()

    return result.tags
  }
)

export const fetchArticleDetails = createAsyncThunk<Article, string, { rejectValue: string }>(
  "articles/fetchArticleDetails",
  async function (slug: string, { rejectWithValue }) {
    const response = await fetch(`${URL}${`${UrlEndpoints.Articles}/${slug}`}`)

    if (!response.ok) {
      return rejectWithValue("Server error!")
    }

    const result = await response.json()

    return result.article
  }
)

export const fetchUserDetails = createAsyncThunk<Author, string, { rejectValue: string }>(
  "articles/fetchUserDetails",
  async function (username: string, { rejectWithValue }) {
    const response = await fetch(`${URL}${`${UrlEndpoints.Profiles}/${username}`}`)

    if (!response.ok) {
      return rejectWithValue("Server error!")
    }

    const result = await response.json()

    return result.profile
  }
)

export const fetchAuthorFeed = createAsyncThunk<GlobalFeedResponse, string, { rejectValue: string }>(
  "articles/fetchAuthorFeed",
  async function (username: string, { rejectWithValue }) {
    const response = await fetch(`${URL}${UrlEndpoints.Articles}?author=${username}`)

    if (!response.ok) {
      return rejectWithValue("Server error!")
    }

    const result = await response.json()

    return result
  }
)