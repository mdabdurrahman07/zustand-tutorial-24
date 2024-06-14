import { Store } from "@/types/store";
import { create } from "zustand";
import { createUserSlice } from "@/store/user_slice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart_slice";
import { devtools } from "zustand/middleware";
export const useStore = create<Store>()(
  devtools(
    immer((...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a)
    })))
  )  