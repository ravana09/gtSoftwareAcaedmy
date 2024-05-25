import React, { useContext } from "react";
import { shoppingContext } from "./Cart";

function Shopping() {
  let { setReceive } = useContext(shoppingContext);

  let product = [
    {
      name: "Product 1",
      price: 1500,
    },

    {
      name: "Product 2",
      price: 2000,
    },

    {
      name: "Product 3",
      price: 2500,
    },
  ];

  console.log(product[0]);

  function AddProduct(index) {
    console.log(index);

    setReceive(product[index]);
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {product.map((i, index) => (
          <li key={index}>
            {index}
            {i.name}
            {i.price}

            <button
              onClick={() => {
                AddProduct(index);
              }}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shopping;
