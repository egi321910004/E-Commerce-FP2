import { useSelector } from "react-redux";


const CartPage = () => {
    const cart = useSelector((state) => state.cart )
    return (
        <div className="h-[90vh]">
            <h1 className="ml-[45%] p-2 text-[60px] font-semibold absolute">CART</h1>
            {cart.cartProducts.length === 0 ? (
                <span className="self-center justify-self-center p-2 text-[60px] font-semibold">YOUR CART STILL EMPTY</span>
            ) : (
                <div className="inline-block h-[90vh]">
                    <div className="w-screen mt-[150px] text-[30px] font-semibold py-2 border-solid border-gray-500 border-2 grid grid-cols-4 place-items-center">
                        <h2 className="">Product</h2>
                        <h2 className="">Price</h2>
                        <h2 className="">Quantity</h2>
                        <h2 className="">Total</h2>
                    </div>
                    { cart.cartProducts.map(cartProduct => (
                        <div key={cartProduct.id}>
                        
                        <div className="mt-[20px] grid grid-cols-4 place-items-center mb-[40px]">
                            {/* Product */}
                            <div className="grid place-items-center">
                                <img className="w-[150px] mb-[10px]" src={cartProduct.image} alt={cartProduct.title}/>
                                <span className="font-semibold">{cartProduct.title}</span>
                            </div>
                            {/* Price */}
                            <div className=" text-[30px] font-normal">
                                <span>$ {cartProduct.price}</span>
                            </div>
                            {/* Quantity */}
                            <div className=" text-[40px] font-normal bg-gray-300 rounded px-2">
                                <button className="hover:text-white">-</button>
                                <span className="mx-2">{cartProduct.cartQuantity}</span>
                                <button className="hover:text-white">+</button>
                            </div>
                            {/* Total */}
                            <div className=" text-[30px] font-bold">
                                <span>$ {cartProduct.price * cartProduct.cartQuantity}</span>
                            </div>
                        </div>

                        </div>
                        
                        ))}
                </div>
            )}
        </div>
    );
};

export default CartPage;