import React from "react";
import { storyblokEditable } from "@storyblok/react";

const Product = ({ blok }) => {
  return <div {...storyblokEditable(blok)}></div>;
};

export default Product;
