import React from "react";
import Categories from "../categories/Categories";
import banner1 from '../../../assets/banner1.jpg'

const Home = () => {
  return (
    <div className="flex justify-center flex-col mr-auto ml-auto">
      <img
          className="home-image"
          src={banner1}
          alt=""
        />
      <div className="category flex justify-center items-center flex-wrap gap-5 z-1 max-w-[1200px] m-auto">
      <Categories/>
      </div>
    </div>
  );
};

export default Home;
