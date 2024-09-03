import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  numOfCakes: number;
};

const initialState: State = {
  numOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    cakeOrdered: (state) => {
      state.numOfCakes -= 1;
    },
    cakeRestocked: (state, action: PayloadAction<number>) => {
      state.numOfCakes += action.payload;
    },
  },
});

export default cakeSlice.reducer;

export const { cakeOrdered, cakeRestocked } = cakeSlice.actions;
