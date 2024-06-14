import { useStore } from "@/store/store";
import { useShallow } from "zustand/react/shallow";
import { Button } from "./ui/button";
import { Minus, Plus } from "lucide-react";

type props = { productId: string };
const ChangeQtyByBtn = ({ productId }: props) => {
  const { getProductById, decQnt, intQnt } = useStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decQnt: state.decQnt,
      intQnt: state.incQnt,
    }))
  );
  const product = getProductById(productId);
  return (
    <>
      {product && (
        <div className="flex gap-2 items-center">
          <Button onClick={() => decQnt(product?.id)} size="icon">
            <Minus/>
          </Button>
          <p>{product.qnt}</p>
          <Button onClick={() => intQnt(product?.id)} size="icon">
            <Plus/>
          </Button>
        </div>
      )}
    </>
  );
};

export default ChangeQtyByBtn;
