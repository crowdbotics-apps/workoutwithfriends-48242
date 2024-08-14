import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_penalty_list = createAsyncThunk(
  "penalties/api_v1_penalty_list",
  async payload => {
    const response = await apiService.api_v1_penalty_list(payload)
    return response.data
  }
)
export const api_v1_penalty_create = createAsyncThunk(
  "penalties/api_v1_penalty_create",
  async payload => {
    const response = await apiService.api_v1_penalty_create(payload)
    return response.data
  }
)
export const api_v1_penalty_retrieve = createAsyncThunk(
  "penalties/api_v1_penalty_retrieve",
  async payload => {
    const response = await apiService.api_v1_penalty_retrieve(payload)
    return response.data
  }
)
export const api_v1_penalty_update = createAsyncThunk(
  "penalties/api_v1_penalty_update",
  async payload => {
    const response = await apiService.api_v1_penalty_update(payload)
    return response.data
  }
)
export const api_v1_penalty_partial_update = createAsyncThunk(
  "penalties/api_v1_penalty_partial_update",
  async payload => {
    const response = await apiService.api_v1_penalty_partial_update(payload)
    return response.data
  }
)
export const api_v1_penalty_destroy = createAsyncThunk(
  "penalties/api_v1_penalty_destroy",
  async payload => {
    const response = await apiService.api_v1_penalty_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const penaltiesSlice = createSlice({
  name: "penalties",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_penalty_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_penalty_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_penalty_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_penalty_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_penalty_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_penalty_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_penalty_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_penalty_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_penalty_list,
  api_v1_penalty_create,
  api_v1_penalty_retrieve,
  api_v1_penalty_update,
  api_v1_penalty_partial_update,
  api_v1_penalty_destroy,
  slice: penaltiesSlice
}
