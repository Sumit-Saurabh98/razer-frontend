import { Plus, Minus, Trash } from "lucide-react";
import { CartBigWhiteText, CartGrayText } from "./CartTextDecoration";
import { IProduct } from "@/store/useProductStore";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";

const CartProductCard = ({ item }:{item: IProduct}) => {

  const { removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="flex justify-between py-5">
      <div className="flex w-3/5">
        <div className="mr-8">
          <Image width={400} height={400} className="w-[100px]" src={item.images[0]} alt={item.title} />
        </div>
        <div>
          <CartBigWhiteText t={item.title} />
          <ul className="list-disc ml-4">
            <li><CartGrayText t={item.specifications.force} /></li>
            <li><CartGrayText t={item.specifications.processor} /></li>
            <li><CartGrayText t={item.specifications.storage} /></li>
          </ul>
          <div className="flex items-center gap-4">
            <button
              className="inline-flex items-center text-sm font-medium text-red-400
							 hover:text-red-300 hover:underline mt-2"
							 onClick={() => removeFromCart(item._id as string)}
            >
              <Trash />
            </button>
          </div>
        </div>
      </div> 
       <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
							 border-gray-600 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2
							  focus:ring-emerald-500"
							  onClick={() => updateQuantity(item._id as string, item.quantity! - 1)}
            >
              <Minus className="text-gray-300" />
            </button>
            <p>{item.quantity}</p>
            <button
              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border
							 border-gray-600 bg-gray-700 hover:bg-gray-600 focus:outline-none 
						focus:ring-2 focus:ring-emerald-500"
						onClick={() => updateQuantity(item._id as string, item.quantity! + 1)}
            >
              <Plus className="text-gray-300" />
            </button>
          </div>

          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-emerald-400">
              ${item.discountedPrice}
            </p>
          </div>
        </div>
    </div>
  );
}

export default CartProductCard;