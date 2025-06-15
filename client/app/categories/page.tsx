"use client"
import React from "react";
import toast from "react-hot-toast";
import circularLoader from "../../public/assets/circular-loader.gif";
import Image from "next/image";

const Categories = () => {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(false)
  }, []);
  return (
    <>
      {!loading ? (
        <p>Categories</p>
      ) : (
        <Image src={circularLoader} className="rounded-lg m-auto" width={20} alt="Loader" />
      )}
    </>
  );
};

export default Categories;
