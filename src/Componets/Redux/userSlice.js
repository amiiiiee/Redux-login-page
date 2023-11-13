import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
    login: false,
  },
  reducers: {
    adduser: (state, action) => {
      state.data = [
        ...state.data,
        { name: action.payload.name, password: action.payload.password },
      ];
    },
    loginTrue: (state, action) => {
      const { name, password } = action.payload;
      const findUser = state.data.find(
        (user) => user.name === name && user.password === password
      );
      if (findUser) {
        state.login = true;
      } else {
        alert("incorrect username or password...!");
      }
    },
    loginFalse: (state) => {
      state.login = false;
    },
  },
});
export const { adduser, loginTrue, loginFalse } = userSlice.actions;
export default userSlice.reducer;
