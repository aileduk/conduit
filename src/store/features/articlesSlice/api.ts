import { createAsyncThunk } from "@reduxjs/toolkit"

import { ARTICLES_PER_AUTHOR_PAGE, ARTICLES_PER_PAGE } from "../../../consts/const"
import { URL, UrlEndpoints } from "../../../consts/endpoints"
import { Article, Author, GlobalFeedResponse } from "../../../types/types"

export const fetchGlobalFeed = createAsyncThunk<GlobalFeedResponse, number, { rejectValue: string }>(
  "articles/fetchGlobalFeed",
  async function (offset: number, { rejectWithValue }) {
    const response = await fetch(
      `${URL}${UrlEndpoints.Articles}?${UrlEndpoints.Limit}=${ARTICLES_PER_PAGE}&${UrlEndpoints.Offset}=${offset}`
    )

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

export const fetchAuthorFeed = createAsyncThunk<
  GlobalFeedResponse,
  { username: string; offset: number },
  { rejectValue: string }
>(
  "articles/fetchAuthorFeed",
  async function ({ username, offset }: { username: string; offset: number }, { rejectWithValue }) {
    const response = await fetch(
      `${URL}${UrlEndpoints.Articles}?${UrlEndpoints.Author}=${username}&${UrlEndpoints.Limit}=${ARTICLES_PER_AUTHOR_PAGE}&${UrlEndpoints.Offset}=${offset}`
    )

    if (!response.ok) {
      return rejectWithValue("Server error!")
    }

    const result = await response.json()

    return result
  }
)
