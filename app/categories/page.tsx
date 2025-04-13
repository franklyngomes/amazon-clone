import React from "react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect } from "react";
import circularLoader from "../../../assets/circular-loader.gif";

const Categories = () => {
    const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true);
      const fetchData = async () => {
        await axios
          .get("https://api.escuelajs.co/api/v1/categories")
          .then((response) => {
            setData(response.data);
            setLoading(false);
            console.log(response);
          })
          .catch((error) => {
            toast.error(error);
          });
      };
      useEffect(() => {
        fetchData();
      }, []);
  return (
    <>
    {!loading ? (
        data?.map((item) => (
            <div key={item.id} className="bg-white p-5">
            <img src={item.image} alt="" className="h-[150px] w-[150px]" />
            <p>{item.name}</p>
          </div>
        ))
      ) : (
        <img src={circularLoader} className="rounded-lg h-5 m-auto" />
    )}
    </>
  );
};

export default Categories;
