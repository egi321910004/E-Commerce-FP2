import React from "react";
import { Link } from "react-router-dom";

export default function Card({ image, title, price, addToCart, productDetail }) {
  return (
    <div className=" m-2 w-[20em] h-[30em] rounded overflow-hidden shadow-lg">
      <div className="flex justify-center">
        <img className="p-2 h-[15em]" src={image} alt={title} />
      </div>
      <div className=" px-6 py-4 font-bold text-xl mb-2">{title}</div>
      <div className="flex px-6 ">
        <div className="mr-4 text-white py-2 px-4 rounded bg-[#393E46] flex justify-center">
          <p className="text-[25px] font-semibold text-red-50">${price}</p>
        </div>
        <button onClick={addToCart} className="bg-[#82CD47] hover:bg-[#557153] text-white font-bold py-2 px-4 mr-5 rounded">
          Add
        </button>
        <Link as={Link} to={`/product-detail/${productDetail}`} className="bg-[#00005C] hover:bg-[#557153] text-white pt-3.5 py-2 px-4 font-bold rounded">
          Detail
        </Link>
      </div>
    </div>
  );
}
