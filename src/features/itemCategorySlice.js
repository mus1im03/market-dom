import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemCategories: [],
};


export const fetchItemCategories = createAsyncThunk(
  "fetch/itemCategories",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/itemcategories");

      const itemCategories = await res.json();

    //   if (itemCategories.error) {
    //     return thunkAPI.rejectWithValue(itemCategories.error);
    //   }

      return thunkAPI.fulfillWithValue(itemCategories);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const itemCategoriesSlice = createSlice({
  name: "itemCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchItemCategories.fulfilled, (state, action) => {
      state.itemCategories = action.payload
    })
  },
});

export default itemCategoriesSlice.reducer;