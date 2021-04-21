import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CurrentUser {
  uid: string;
  displayName: string;
  phoneNumber: string;
  roles: number;
  idScope: string;
}
interface AuthStateModel {
  isLoading: boolean;
  user: CurrentUser | null;
}
const initialState: AuthStateModel = { isLoading: true, user: null };
export const authSliece = createSlice({
  name: "authState",
  initialState: initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthStateModel>) {
      state = action.payload;
      return state;
    },
  },
});
export const { setUser } = authSliece.actions;
