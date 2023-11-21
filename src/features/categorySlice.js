import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  itemCategories: [],
};

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/categories");

      const categories = await res.json();

      if (categories.error) {
        return thunkAPI.rejectWithValue(categories.error);
      }

      return categories;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchItemCategories = createAsyncThunk(
  "fetch/itemCategories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/itemcategories");

      const itemCategories = await res.json();

      if (itemCategories.error) {
        return thunkAPI.rejectWithValue(itemCategories.error);
      }

      return thunkAPI.fulfillWithValue(itemCategories);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      //   state.loading = false;
    })
    // .addCase(fetchTodos.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(fetchTodos.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload
    // })
    .addCase(fetchItemCategories.fulfilled, (state, action) => {
      state.itemCategories = action.payload
    })
  },
});

export default categoriesSlice.reducer;
