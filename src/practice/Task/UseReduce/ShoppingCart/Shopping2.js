import React, { useContext } from "react";
import { shoppingContext } from "./Cart";

function Shopping2() {
  let { setReceive, dispatch } = useContext(shoppingContext);

  let product = [
    {
      name: "shirt ",
      price: 1500,
    },

    {
      name: "Half hand ",
      price: 2000,
    },

    {
      name: "Pant ",
      price: 2500,
    },
  ];

  function AddProduct(index) {
    let data = { ...product[index], id: new Date().getTime() };
    setReceive(data);
    // console.log(data)

    dispatch({ type: "add", text: data });
  }

  return (
    <div>
      <h1>Products 2</h1>
      <ul>
        {product.map((i, id) => (
          <li key={id}>
            {i.name}

            {i.price}

            <button
              onClick={() => {
                AddProduct(id);
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

export default Shopping2;
