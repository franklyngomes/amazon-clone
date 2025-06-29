"use client"
import React from "react";
import ImageSlider from "./components/ImageSlider";
import Categories from "./categories/page";
import ProductList from "./components/ProductList";


const Home = () => {
const images = [
  "/assets/banner1.jpg",
  "/assets/banner2.jpg",
  "/assets/banner3.jpg",
  "/assets/banner4.jpg",
  "/assets/banner5.jpg",
  "/assets/banner6.jpg",
];
  return (
    <div className="flex justify-center flex-col">
      {/* <div>
         <ImageSlider images={images} />
      </div> */}
      {/* <div className="category flex justify-center items-center flex-wrap gap-5">
        <Categories />
      </div> */}
      <div className="bg-gradient-to-b from-transparent to-slate-100 border">
        <ProductList/>
      </div>
    </div>
  );
};

export default Home;
