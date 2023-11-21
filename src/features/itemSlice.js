import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const fetchItems = createAsyncThunk(
  "fetch/items",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/items");

      const items = await res.json();

      if (items.error) {
        return thunkAPI.rejectWithValue(items.error);
      }

      return thunkAPI.fulfillWithValue(items);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addCart = createAction("addToCart");
export const removeCart = createAction("removeCart");
export const plus = createAction("plus");
export const minus = createAction("minus");

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: (builder) => {
    // builder
    //   .addCase(addCart, (state, action) => {
    //     state.cartItems.unshift({
    //       id: state.cartItems.length,
    //       productId: action.payload,
    //       amount: 1,
    //     });
    //   })
    //   .addCase(removeCart, (state, action) => {
    //     state.cartItems = state.cartItems.filter(
    //       (item) => item.id !== action.payload.cartId
    //     );
    //     state.items.map((item) => {
    //       if (item._id !== action.payload.id) {
    //         return (item.left += action.payload.amount);
    //       }
    //       return item;
    //     });
    //   })
    //   .addCase(plus, (state, action) => {
    //     state.items.map((item) => {
    //       if (action.payload === item._id && item.left) {
    //         item.left -= 1;
    //         state.cartItems.map((el) => {
    //           if (action.payload === el.productId) {
    //             el.amount += 1;
    //           }
    //           return el;
    //         });
    //         return item;
    //       }
    //     });
    //   })
    //   .addCase(minus, (state, action) => {
    //     state.cartItems = state.cartItems.map((el) => {
    //       if (el.productId === action.payload && el.amount > 1) {
    //         el.amount -= 1;
    //         state.items = state.items.map((item) => {
    //           if (item._id === action.payload) {
    //             item.left += 1;
    //           }
    //           return item;
    //         });
    //         return el;
    //       }
    //     });
    //   });
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default itemsSlice.reducer;
