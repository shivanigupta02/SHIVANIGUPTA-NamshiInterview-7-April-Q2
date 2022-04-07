import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function Plp() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.plp.products);

  useEffect(function () {
    dispatch({ type: "FETCH_PRODUCTS" });
  }, []);

  return (
    <div className="row" onClick={() => dispatch({ type: "FETCH_PRODUCTS" })}>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default Plp;
