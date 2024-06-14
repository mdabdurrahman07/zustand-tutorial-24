import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";
import { useEffect } from "react";

type props = { productId: string };
const ChangeQtyByBtn = ({ productId }: props) => {
  const { getProductById, decQnt, incQnt, setTotal } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQnt: state.decQnt,
      incQnt: state.incQnt,
      setTotal: state.setTotal,
    }))
  );
  const product = getProductById(productId);
  useEffect(() => {
    const unSub = useStore.subscribe(
      (state) => state.Products,
      (products) => {
        setTotal(products.reduce((acc, item) => acc + item.qnt, 0));
      },
      { fireImmediately: true }
    );
    return unSub;
  }, [setTotal]);
  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button onClick={() => decQnt(product?.id)} size="icon">
            <Minus />
          </Button>
          <p>{product.qnt}</p>
          <Button onClick={() => incQnt(product?.id)} size="icon">
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
};

export default ChangeQtyByBtn;
