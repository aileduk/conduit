import { createAsyncThunk } from "@reduxjs/toolkit"

import { URL, UrlEndpoints } from "../../../consts/endpoints"
import { GlobalFeedResponse } from "../../../types/types"

export const fetchGlobalFeed = createAsyncThunk<GlobalFeedResponse, undefined, { rejectValue: string }>(
  "articles/fetchGlobalFeed",
  async function (_, { rejectWithValue }) {
    const response = await fetch(`${URL}${UrlEndpoints.artigles}`)

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
    const response = await fetch(`${URL}${UrlEndpoints.tags}`)

    if (!response.ok) {
      return rejectWithValue("Server error!")
    }

    const result = await response.json()

    return result.tags
  }
)
