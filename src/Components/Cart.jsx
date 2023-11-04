import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, reset } from "../Redux/actions/cartActions";
import ProductCard from "./ProductCard";

function Cart() {
  const cartArr = useSelector((state) => state);
  const dispatch = useDispatch();

  let total = cartArr.reduce((total, prod) => {
    return total + prod.price;
  }, 0);

  return (
    <div className="cartPage">
      <h1>Cart Items</h1>
      <div className="cartBody">
        <div className="cartContainer">
          {cartArr.map((prod, ind) => {
            return <ProductCard key={prod.id} {...prod} />;
          })}
        </div>
        <div className="cartList">
          {cartArr.map((prod, ind) => {
            return (
              <div className="listRow" key={prod.id}>
                <div>{`${ind + 1}.${prod.name}`}</div>
                <div>${prod.price}</div>
              </div>
            );
          })}
          <div className="totalCost">
            <div>Total</div>
            <div>${total}</div>
          </div>
          <button
            onClick={() => {
              dispatch(reset());
              alert("All the items are Checked Out");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
