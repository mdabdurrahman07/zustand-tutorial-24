import { Store } from "@/types/store";
import { create } from "zustand";
import { createUserSlice } from "@/store/user_slice";
import { immer } from "zustand/middleware/immer";
import { createCartSlice } from "./cart_slice";
import { devtools, subscribeWithSelector } from "zustand/middleware";
export const useStore = create<Store>()(
  devtools(
    subscribeWithSelector(
      immer((...a) => ({
        ...createUserSlice(...a),
        ...createCartSlice(...a),
      }))
    )
  )
);
