import { AnyAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";


export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {
    setUsers: (state , action) => {
      state.data = action.payload;
      console.log("Called setUsers");
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
  },
});

export const {setUsers} = usersSlice.actions;
export default usersSlice.reducer;
