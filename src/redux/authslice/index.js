import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    is_authenticated: {},
    access_token: null
  },
  reducers: {
    login: (state, action) => {
      state.is_authenticated = true
    },
    logout: (state, action) => {
      state.is_authenticated = false
      state.access_token = null
    },
  }
})

export const AUTH_ACTIONS = authSlice.actions

export const loginUser = (data) => {
  return async (dispatch) => {
    dispatch(AUTH_ACTIONS.login(data))
  }
}
export const logoutUser = () => {
  return async (dispatch) => {
    dispatch(AUTH_ACTIONS.logout())
  }
}

export default authSlice.reducer
