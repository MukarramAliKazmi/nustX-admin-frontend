import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the sidebar feature
const initialState = {
  isOpen: false,
};

// Create and export the slice for the sidebar feature
export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  // Define reducers for updating the state
  reducers: {
    // Toggle the sidebar open or close
    toggleSidebar: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Export the actions from the slice
export const { toggleSidebar } = sidebarSlice.actions;

// Export the reducer from the slice
export default sidebarSlice.reducer;
