import React from "react";

function NavBar({ setPage }) {
  console.log(setPage);
  return (
    <div className="navBar">
      <div
        onClick={() => {
          setPage(true);
        }}
        className="title"
      >
        Shopping cart
      </div>
      <div className="right">
        <div
          onClick={() => {
            setPage(true);
          }}
        >
          Home Page
        </div>
        <div
          onClick={() => {
            setPage(false);
          }}
        >
          Cart Page
        </div>
      </div>
    </div>
  );
}

export default NavBar;
