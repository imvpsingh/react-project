import React, { useEffect, useState } from "react";
import Header from "./header";
import "./Store.css";
import axios from "axios";

export default function Store() {
  let [catRes, setCatRes] = useState([]);
  let [allPro, setAllpro] = useState([]);
  let [mCatName, setmCatName] = useState("");
  let [isLoading, setIsLoading] = useState(false);
  let [isBlank, setIsBlank] = useState(false);
  let catList = () => {
    axios("https://dummyjson.com/products/categories")
      .then((res) => res.data)
      .then((finalRes) => {
        setCatRes(finalRes);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  let massage = "";

  let allProList = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalRes) => {
        if (finalRes.products.length === 0) {
          setIsBlank(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsBlank(false);
          setAllpro(finalRes.products);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    allProList();
    catList();
  }, []);

  useEffect(() => {
    if (mCatName !== "") {
      setIsLoading(true);
      axios
        .get(`https://dummyjson.com/products/category/${mCatName}`)
        .then((res) => res.data)
        .then((finalRes) => {
          if (finalRes.products.length === 0) {
            setIsBlank(true);
            setIsLoading(false);
          } else {
            setIsLoading(false);
            setIsBlank(false);
            setAllpro(finalRes.products);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [mCatName]);

  let mCat = catRes.map((value, index) => {
    return (
      <li key={index} onClick={() => setmCatName(value.name)}>
        {value.name}
      </li>
    );
  });

  let mAllPro = allPro.map((product, index) => {
    return (
      <div key={index} className="mContainer">
        <img className="mImg" src={product.thumbnail} alt={product.name} />
        <p>{product.title}</p>
        <b>Price: {product.price}</b>
      </div>
    );
  });

  return (
    <div className="store">
      <Header title="My Store"></Header>

      <div className="mainBox">
        <div className="ctgry">
          <ul>{mCat}</ul>
        </div>
        <div className="product">
          <p className="heading">Our Products </p>
          <div className="pContainer">
            {isLoading ? (
              <img
                className="noData"
                src="https://www.wpfaster.org/wp-content/uploads/2013/06/loading-gif.gif"
                alt="loading"
                width={60}
              />
            ) : (
              <>
                {!isBlank ? mAllPro : <h1 className="noData">No data Found</h1>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
