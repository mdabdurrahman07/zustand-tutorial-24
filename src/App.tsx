import { ProductData } from "@/lib/mockData.ts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "./components/ui/card";
import { Button } from "./components/ui/button";
import { useStore } from "@/store/store";

const App = () => {
  const addProduct = useStore((state) => state.addProduct);
  const Cartproducts = useStore((state) => state.Products);

  return (
    <div className="space-y-2 h-screen max-w-sm mx-auto dark bg-background mt-2">
      <h1 className="text-2xl">Products:</h1>
      <div className="space-y-2">
        {ProductData.map((products) => (
          <Card key={products.id}>
            <CardHeader>{products.title}</CardHeader>
            <CardContent>${products.price}</CardContent>
            <CardFooter>
              {Cartproducts.find((item) => item.id === products.id) ? (
                "Add qnt"
              ) : (
                <Button onClick={() => addProduct(products)} variant="default">
                  Add to cart
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
