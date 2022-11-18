import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("products/getProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const auth = async ({ username, password }) => {
  return axios.post("https://fakestoreapi.com/auth/login", {
    username,
    password,
  });
};
