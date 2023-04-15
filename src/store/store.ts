import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import sidebarSlice from "@/store/slices/sidebarSlice";

// Combine all the slice reducers
const rootReducer = {
  sidebar: sidebarSlice,
};

// Create the store instance
const store = configureStore({
  reducer: rootReducer,
});

// Export the store instance
export default store;

// Export the RootState and AppDispatch types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export custom hooks for dispatch and selector with correct types
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
