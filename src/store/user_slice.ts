import { StateCreator } from "zustand"

type UserState = {
    Usename: string,
    Fullname:string,
    age: number,
    address: string
}

type UserActions = {
    setAddress: ( address: string) => void
}

export type UserSlice = UserState & UserActions

export const createUserSlice : StateCreator<UserSlice, [] , [] , UserSlice> = (set) => ({
    address : "",
    age: 0,
    Fullname: "",
    Usename: "",
    setAddress: (address) => set(() => ({ address}))
})