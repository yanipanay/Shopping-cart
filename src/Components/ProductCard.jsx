import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, reset } from "../Redux/actions/cartActions";

function ProductCard({ id, name, image, price, isInCart }) {
  const cartArr = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="prodCard">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="details">
        <div className="name">Name: {name}</div>
        <div className="price">Price: ${price}</div>
      </div>
      {isInCart ? (
        <button
          onClick={() => {
            dispatch(remove({ id, name, image, price, isInCart }));
          }}
        >
          Remove from cart
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(add({ id, name, image, price, isInCart }));
            console.log({ id, name, image, price, isInCart });
          }}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
