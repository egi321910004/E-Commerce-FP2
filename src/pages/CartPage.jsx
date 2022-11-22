import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { clearCart, decreaseProducts, getTotal, increaseProducts, removeFromCart } from "../Redux/CartSlice";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart]);

  const handleRemoveFromCart = (cartProduct) => {
    dispatch(removeFromCart(cartProduct));
  };

  const handleDecreaseFromCart = (cartProduct) => {
    dispatch(decreaseProducts(cartProduct));
  };

  const handleIncreaseFromProduct = (cartProduct) => {
    dispatch(increaseProducts(cartProduct));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="h-[100%]">
      <h1 className="ml-[45%] p-2 text-[60px] font-semibold absolute">CART</h1>
      {cart.cartProducts.length === 0 ? (
        <div className="h-[90%] grid place place-items-center ">
          <span className="text-center absolute top-[50%] text-[60px] font-semibold">YOUR CART STILL EMPTY</span>
        </div>
      ) : (
        <div className="inline-block h-[90vh] grid-cols-1">
          <div className="w-screen mt-[150px] text-[30px] font-semibold py-2 border-solid border-gray-500 border-2 grid grid-cols-4 place-items-center">
            <h2 className="">Product</h2>
            <h2 className="">Price</h2>
            <h2 className="">Quantity</h2>
            <h2 className="">Total</h2>
          </div>
          {cart.cartProducts.map((cartProduct) => (
            <div key={cartProduct.id}>
              <div className="mt-[20px] grid grid-cols-4 place-items-center mb-[50px]">
                {/* Product */}
                <div className="grid place-items-center">
                  <img className="w-[150px] mb-[10px]" src={cartProduct.image} alt={cartProduct.title} />
                  <span className="font-semibold text-center	">{cartProduct.title}</span>
                  <button onClick={() => handleRemoveFromCart(cartProduct)} className="hover:text-pink-700">
                    Remove
                  </button>
                </div>
                {/* Price */}
                <div className=" text-[30px] font-normal">
                  <span>$ {cartProduct.price}</span>
                </div>
                {/* Quantity */}
                <div className=" text-[40px] font-normal bg-gray-300 rounded px-2">
                  <button onClick={() => handleDecreaseFromCart(cartProduct)} className="hover:text-white">
                    -
                  </button>
                  <span className="mx-2">{cartProduct.cartQuantity}</span>
                  <button onClick={() => handleIncreaseFromProduct(cartProduct)} className="hover:text-white">
                    +
                  </button>
                </div>
                {/* Total */}
                <div className=" text-[30px] font-bold">
                  <span>$ {cartProduct.price * cartProduct.cartQuantity}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Summary */}
          <div className="summary grid col-span-1 grid-cols-4 place-items-center py-5">
            <div className="col-start-1 col-span-2">
              <button onClick={() => handleClearCart()} className=" bg-[#DC3535] hover:bg-[#F49D1A] text-white px-6 py-4 text-[40px] text-[20px] rounded">
                Clear Cart
              </button>
            </div>

            <div className="col-start-4 col-span-1">
              <h1 className="text-[40px] text-center font-bold mb-[30px]">${cart.cartTotalAmount}</h1>
              <button className="bg-[#1D1CE5] rounded hover:bg-[#7DE5ED] text-white px-6 py-4 text-[20px]">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
