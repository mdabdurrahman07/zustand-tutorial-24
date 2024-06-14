import { CircleX, ShoppingCart, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import ChangeQtyByBtn from "./ChangeQtyByBtn";

const Cart = () => {
  const { reset, products, removeProduct , TotalPrice } = useStore(
    useShallow((state) => ({
      reset: state.reset,
      products: state.Products,
      removeProduct: state.removeProduct,
      TotalPrice: state.TotalPrice
    }))
  );
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="icon">
          <ShoppingCart />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="overflow-y-scroll space-y-2 w-80">
        <div className="flex gap2 text-lg items-center">
          <h1>Cart:</h1>
          <Button onClick={reset} variant="destructive" size="icon">
            <CircleX />
          </Button>
          <div className="space-y-2">
            {products.map((items) => (
              <Card className="flex flex-col" key={items.id}>
                <CardHeader className="flex flex-row items-center gap-2">
                  <CardTitle>{items.title}</CardTitle>
                  <Button
                    onClick={() => removeProduct(items.id)}
                    size="icon"
                    variant="destructive"
                  >
                    <Trash />
                  </Button>
                </CardHeader>
                <CardContent>
                    {items.price}
                </CardContent>
                <CardFooter>
                    <ChangeQtyByBtn productId={items.id}/>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <p>Total: {TotalPrice}</p>
      </PopoverContent>
    </Popover>
  );
};

export default Cart;
