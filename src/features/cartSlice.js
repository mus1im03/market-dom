import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};


export const fetchCart = createAsyncThunk(
  "fetch/cart",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/cart");

      const cart = await res.json();

      return thunkAPI.fulfillWithValue(cart);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload
    })
  },
});

export default cart.reducer;