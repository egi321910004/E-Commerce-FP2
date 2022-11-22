import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../API";
import { addToCart } from "../Redux/CartSlice";
import Card from "./Card";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-wrap justify-around gap-8">
      {products.map((product) => (
        <Card productDetail={product.id} addToCart={() => handleAddToCart(product)} key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} />
      ))}
    </div>
  );
};

export default ShowProduct;
