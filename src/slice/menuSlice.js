import { MENU_ITEMS } from "@/constants";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  activeMenuItem: MENU_ITEMS.PENCIL,
  actionMenuItem: null,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState: initialState,
  reducers: {
    menuItemClick: (state, action) => {
      state.activeMenuItem = action.payload;
    },
    actionItemClick: (state, action) => {
      state.actionMenuItem = action.payload;
    },
  },
});

export const { menuItemClick ,actionItemClick} = menuSlice.actions;
export default menuSlice.reducer;
