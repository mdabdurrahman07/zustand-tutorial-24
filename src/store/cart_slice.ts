import { CartProduct } from "@/types/cart_product"
import { Product } from "@/types/product"
import { StateCreator } from "zustand"

type CartState = {
   Products: CartProduct[]
   TotalPrice: number
}

type CartActions = {
   addProduct: (product : Product) => void
   removeProduct: (productId: string) => void
   incQnt: (productId: string) => void
   decQnt: (productId: string) => void
   getProductById: (productId: string) => CartProduct | undefined
   setTotal: (total:number) => void
   reset: () => void
}

const initialState: CartState = {
    Products : [],
    TotalPrice: 0
}

export type CartSlice = CartState & CartActions


export const createCartSlice : StateCreator<CartSlice, [["zustand/immer" , never]] , [] , CartSlice> = (set , get) => ({
    ...initialState,
    incQnt: (productId) => set((state) => {
        const foundProduct = state.Products.find((product) => product.id === productId)
        if(foundProduct){
            foundProduct.qnt += 1
        }
    }),

    decQnt: (ProductId) =>
         set((state) =>{
            const foundIndex = state.Products.findIndex((product)=>{
                product.id === ProductId
            })
            if(foundIndex !== -1){
                if (state.Products[foundIndex].qnt === 1){
                    state.Products.splice(foundIndex , 1)
                }
                else{
                    state.Products[foundIndex].qnt -= 1
                }
            }
         }),
         addProduct: (product)=> set((state) => {
            state.Products.push({...product, qnt:1 })
         }),

         removeProduct: (productId) => set((state) => {
            state.Products = state.Products.filter(
                (product) => product.id !== productId
            )
         }),
         getProductById: (productId) => get().Products.find((product) => product.id === productId),
         setTotal: (total) => set((state) => {state.TotalPrice = total

         }),

         reset: () => set(() => initialState),
    
})