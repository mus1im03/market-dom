import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};

const initialState = {
  error: null,
  singingUp: false,
  singingIn: false,
  token: localStorage.getItem('token'),
  user: localStorage.getItem('user')
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, password }),
      });

      const json = await res.json()

      if(json.error) {
        return thunkAPI.rejectWithValue(json.error)
      }

      return json
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
  }
)

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4040/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, password }),
      });

      const token = await res.json()

      if(token.error) {
        return thunkAPI.rejectWithValue(token.error)
      }

      const user = parseJwt(token)

      localStorage.setItem('token', token)
      localStorage.setItem('user', user.id)

      return { token, user }
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(authSignUp.pending, (state) => {
      state.singingUp = true
      state.error = null
    })
    .addCase(authSignUp.rejected, (state, action) => {
      state.singingUp = false
      state.error = action.payload
    })
    .addCase(authSignUp.fulfilled, (state, action) => {
      state.singingUp = false
      state.error = null
    })
    .addCase(authSignIn.pending, (state) => {
      state.singingIn = true
      state.error = null
    })
    .addCase(authSignIn.rejected, (state, action) => {
      state.singingIn = false
      state.error = action.payload
    })
    .addCase(authSignIn.fulfilled, (state, action) => {
      console.log(action.payload);
      state.singingIn = false
      state.error = null
      state.token = action.payload.token
      state.user = action.payload.user
    })
  },
});

export default applicationSlice.reducer;