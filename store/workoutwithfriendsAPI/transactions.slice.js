import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_transaction_list = createAsyncThunk(
  "transactions/api_v1_transaction_list",
  async payload => {
    const response = await apiService.api_v1_transaction_list(payload)
    return response.data
  }
)
export const api_v1_transaction_create = createAsyncThunk(
  "transactions/api_v1_transaction_create",
  async payload => {
    const response = await apiService.api_v1_transaction_create(payload)
    return response.data
  }
)
export const api_v1_transaction_retrieve = createAsyncThunk(
  "transactions/api_v1_transaction_retrieve",
  async payload => {
    const response = await apiService.api_v1_transaction_retrieve(payload)
    return response.data
  }
)
export const api_v1_transaction_update = createAsyncThunk(
  "transactions/api_v1_transaction_update",
  async payload => {
    const response = await apiService.api_v1_transaction_update(payload)
    return response.data
  }
)
export const api_v1_transaction_partial_update = createAsyncThunk(
  "transactions/api_v1_transaction_partial_update",
  async payload => {
    const response = await apiService.api_v1_transaction_partial_update(payload)
    return response.data
  }
)
export const api_v1_transaction_destroy = createAsyncThunk(
  "transactions/api_v1_transaction_destroy",
  async payload => {
    const response = await apiService.api_v1_transaction_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_transaction_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_transaction_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_transaction_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_transaction_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_transaction_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_transaction_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_transaction_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_transaction_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_transaction_list,
  api_v1_transaction_create,
  api_v1_transaction_retrieve,
  api_v1_transaction_update,
  api_v1_transaction_partial_update,
  api_v1_transaction_destroy,
  slice: transactionsSlice
}
