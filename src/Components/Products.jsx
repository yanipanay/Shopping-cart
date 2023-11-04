import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const exampleArray = [
  {
    id: 1,
    name: "iPhone 9",
    price: 549,
    image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  },
  {
    id: 2,
    name: "iPhone X",
    price: 899,
    image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
  },
  {
    id: 3,
    name: "Samsung Universe 9",
    price: 1249,
    image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
  },
  {
    id: 4,
    name: "OPPOF19",
    price: 280,
    image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
  },
  {
    id: 5,
    name: "Huawei P30",
    price: 499,
    image: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
  },
  {
    id: 6,
    name: "MacBook Pro",
    price: 1749,
    image: "https://i.dummyjson.com/data/products/6/thumbnail.png",
  },
  {
    id: 7,
    name: "Samsung Galaxy Book",
    price: 1499,
    image: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
  },
  {
    id: 8,
    name: "Microsoft Surface Laptop 4",
    price: 1499,
    image: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
  },
  {
    id: 9,
    name: "Infinix INBOOK",
    price: 1099,
    image: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
  },
  {
    id: 10,
    name: "HP Pavilion 15-DK1056WM",
    price: 1099,
    image: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
  },
  {
    id: 11,
    name: "perfume Oil",
    price: 13,
    image: "https://i.dummyjson.com/data/products/11/thumbnail.jpg",
  },
  {
    id: 12,
    name: "Brown Perfume",
    price: 40,
    image: "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
  },
  {
    id: 13,
    name: "Fog Scent Xpressio Perfume",
    price: 13,
    image: "https://i.dummyjson.com/data/products/13/thumbnail.webp",
  },
  {
    id: 14,
    name: "Non-Alcoholic Concentrated Perfume Oil",
    price: 120,
    image: "https://i.dummyjson.com/data/products/14/thumbnail.jpg",
  },
  {
    id: 15,
    name: "Eau De Perfume Spray",
    price: 30,
    image: "https://i.dummyjson.com/data/products/15/thumbnail.jpg",
  },
  {
    id: 16,
    name: "Hyaluronic Acid Serum",
    price: 19,
    image: "https://i.dummyjson.com/data/products/16/thumbnail.jpg",
  },
  {
    id: 17,
    name: "Tree Oil 30ml",
    price: 12,
    image: "https://i.dummyjson.com/data/products/17/thumbnail.jpg",
  },
  {
    id: 18,
    name: "Oil Free Moisturizer 100ml",
    price: 40,
    image: "https://i.dummyjson.com/data/products/18/thumbnail.jpg",
  },
  {
    id: 19,
    name: "Skin Beauty Serum.",
    price: 46,
    image: "https://i.dummyjson.com/data/products/19/thumbnail.jpg",
  },
  {
    id: 20,
    name: "Freckle Treatment Cream- 15gm",
    price: 70,
    image: "https://i.dummyjson.com/data/products/20/thumbnail.jpg",
  },
  {
    id: 21,
    name: "- Daal Masoor 500 grams",
    price: 20,
    image: "https://i.dummyjson.com/data/products/21/thumbnail.png",
  },
  {
    id: 22,
    name: "Elbow Macaroni - 400 gm",
    price: 14,
    image: "https://i.dummyjson.com/data/products/22/thumbnail.jpg",
  },
  {
    id: 23,
    name: "Orange Essence Food Flavou",
    price: 14,
    image: "https://i.dummyjson.com/data/products/23/thumbnail.jpg",
  },
  {
    id: 24,
    name: "cereals muesli fruit nuts",
    price: 46,
    image: "https://i.dummyjson.com/data/products/24/thumbnail.jpg",
  },
  {
    id: 25,
    name: "Gulab Powder 50 Gram",
    price: 70,
    image: "https://i.dummyjson.com/data/products/25/thumbnail.jpg",
  },
  {
    id: 26,
    name: "Plant Hanger For Home",
    price: 41,
    image: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
  },
  {
    id: 27,
    name: "Flying Wooden Bird",
    price: 51,
    image: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
  },
  {
    id: 28,
    name: "3D Embellishment Art Lamp",
    price: 20,
    image: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
  },
  {
    id: 29,
    name: "Handcraft Chinese style",
    price: 60,
    image: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
  },
  {
    id: 30,
    name: "Key Holder",
    price: 30,
    image: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
  },
];

const prod = {
  id: 1,
  name: "title",
  isInCart: false,
  price: 345,
};

function Products() {
  const [prods, setProd] = useState(exampleArray);
  //   useEffect(() => {
  //     fetch("https://dummyjson.com/products")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const newArr = data.products.map((prod) => {
  //           return {
  //             id: prod.id,
  //             name: prod.title,
  //             price: prod.price,
  //             image: prod.thumbnail,
  //           };
  //         });
  //         setProd(newArr);
  //         console.log(newArr);
  //       });
  //   }, []);

  return (
    <div className="productPage">
      <h1>All Items</h1>
      <div className="ProdContainer">
        {prods.map((prod, ind) => {
          return <ProductCard key={prod.id} {...prod} />;
        })}
      </div>
    </div>
  );
}

export default Products;
