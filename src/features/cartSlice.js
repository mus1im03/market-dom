import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalCash: 0,
  // loading: false,
  // error: null,
};

export const fetchCart = createAsyncThunk("fetch/cart", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4040/cart");

    const cart = await res.json();

    return thunkAPI.fulfillWithValue(cart);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const addToCart = createAsyncThunk(
  "cart/add",
  async ({ products, totalCash }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products, totalCash }),
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (productId, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4040/cart/remove/${productId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const increaseItemQuantity = createAsyncThunk(
  "cart/increaseQuantity",
  async ({ cartId, productId }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:4040/cart/${cartId}/${productId}`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const decreaseItemQuantity = createAsyncThunk(
  "cart/decreaseQuantity",
  async ({ cartId, productId }, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:4040/cart/${cartId}/${productId}`,
        {
          method: "PATCH",
        }
      );

      const data = await res.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // .addCase(fetchCart.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      .addCase(fetchCart.fulfilled, (state, action) => {
        // state.loading = false;
        state.items = action.payload;
        state.totalCash = action.payload.totalCash;
      })
      // .addCase(fetchCart.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalCash = action.payload.totalCash;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalCash = action.payload.totalCash;
      })
      .addCase(increaseItemQuantity.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalCash = action.payload.totalCash;
      })
      .addCase(decreaseItemQuantity.fulfilled, (state, action) => {
        state.items = action.payload.items;
        state.totalCash = action.payload.totalCash;
      });
  },
});

export default cartSlice.reducer;
