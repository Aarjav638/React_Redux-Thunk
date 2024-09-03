import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type Users = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  role: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

type State = {
  loading: boolean;
  users: Users[];
  error: string;
};

const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get("https://dummyjson.com/users");
  return response.data.users;
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    users: [],
    error: "",
  } as State,
  reducers: {
    fetchUsersRequest: (state) => {
      state.loading = true;
    },
    fetchUsersSuccess: (state, action: PayloadAction<Users[]>) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    },
    fetchUsersFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchUsers.fulfilled,
      (state, action: PayloadAction<Users[]>) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message || "Error Fetching Users";
    });
  },
});

export default userSlice.reducer;

export { fetchUsers };
