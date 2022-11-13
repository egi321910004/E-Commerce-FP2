import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { GetProduct } from "../../API";
import { productSelector } from "../../Redux/ProductSlice";
import Card from "./Card";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(productSelector.selectAll);

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap justify-around gap-8">
      {products.map((product) => (
        <Card key={product.id} image={product.image} title={product.title} description={product.description} price={product.price} />
      ))}
    </div>
  );
};

export default ShowProduct;
