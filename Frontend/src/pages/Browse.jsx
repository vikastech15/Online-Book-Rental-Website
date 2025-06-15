import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "../components/ProductList";
import Navbar from "../components/navbar";
import axios from "axios";

export default function Browse() {
  // const navigate = useNavigate();
  // const [isLogin, setIsLogin] = useState(false);
  const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // const token = localStorage.getItem("token");
  //   // if (!token) {
  //   //   navigate("/login");
  //   // }else{
  //   const fetchProducts = async () => {
  //     try {
  //       const res = await axios.get("/api/browse");
  //       console.log(res.data); // Optional: to debug
  //       setProducts(res.data);
  //     } catch (error) {
  //       console.error("Error fetching browse data:", error);
  //     }
  //   };
  //   fetchProducts();
  //   // }
  // }, []);

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center w-full  text-gray-800">
        <ProductList products={products} />
      </div>
    </>
  );
}
