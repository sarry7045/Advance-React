import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "./Actions/ProductAction";

function PContainer() {
  const product = useSelector((state) => state.allProducts.product);
  console.log(product);
  const dispatch = useDispatch();

  const { id, category } = product;

  const fetchProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
    // const data = JSON.stringify(response);
    // console.log(response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return <div>PContainer</div>;
}

export default PContainer;
