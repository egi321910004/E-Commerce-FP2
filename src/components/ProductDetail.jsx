import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getProductDetail } from "../API";

import { addToCart } from "../Redux/CartSlice";

export default function ProductDetail() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [data, setData] = useState([]);

  const handleAddToCart = (data) => {
    dispatch(addToCart(data));
  };

  useEffect(() => {
    getProductDetail(id).then((res) => setData(res.data));
  }, [id]);
  return (
    <div className="w-screen h-[90%] grid place place-items-center">
      <div className="grid grid-rows-3 grid-flow-col">
        <img className=" h-[30em] row-span-3" src={data.image} alt={data.title} />
        <h1 className=" text-[2em] col-span-2 grid place-content-center ">{data.title}</h1>
        <span className=" text-[1em] col-span-2 p-10 ">{data.description}</span>
        <div className="ml-[50%] flex items-center">
          <span className=" text-[2em] col-span-2 p-10 font-bold">${data.price}</span>
          <button onClick={() => handleAddToCart(data)} className="bg-[#82CD47] hover:bg-[#557153] text-white text-[40px] font-bold py-2 px-4 mr-5 rounded">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
