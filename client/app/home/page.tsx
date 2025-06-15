import React from "react";
import Categories from "../categories/page";
import banner1 from '../../public/assets/banner1.jpg'
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex justify-center flex-col mr-auto ml-auto">
         <Image src={banner1} className="home-image" alt="Banner" />
      <div className="category flex justify-center items-center flex-wrap gap-5 z-1 max-w-[1200px] m-auto">
      <Categories/>
      </div>
    </div>
  );
};

export default Home;
