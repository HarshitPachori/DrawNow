import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "@/slice/menuSlice";
import ToolBoxReducer from "@/slice/toolboxSlice";

export const store = configureStore({
  reducer: {
    menu: MenuReducer,
    toolbox: ToolBoxReducer,
  },
});
