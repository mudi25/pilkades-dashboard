import { rootReducer } from "./store";
export { firebaseApp, getMetadata, uploadFile } from "./firebase";
export { store } from "./store";
export { authSliece, setUser } from "./authState";
export type { CurrentUser } from "./authState";
export interface PageWithIdProps {
  id: string;
}
export interface PageWithIdAndRolesProps {
  id: string;
  roles: string;
}
export type RootState = ReturnType<typeof rootReducer>;
