import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cakeOrdered } from "../cake/cakeSlice";

type State = {
  numOfIceCreams: number;
};

const initialState: State = {
  numOfIceCreams: 20,
};
const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    iceCreamOrdered: (state) => {
      state.numOfIceCreams -= 1;
    },
    iceCreamRestocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      if (state.numOfIceCreams > 0) {
        state.numOfIceCreams -= 1;
      } else {
        alert("No Ice Creams left,Please Restock");
      }
    });
  },
});

export default iceCreamSlice.reducer;

export const { iceCreamOrdered, iceCreamRestocked } = iceCreamSlice.actions;
