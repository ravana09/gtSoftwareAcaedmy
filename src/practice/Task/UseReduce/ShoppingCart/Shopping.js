import React, { useContext } from "react";
import { shoppingContext } from "./Cart";

function Shopping() {
  let {receive, setReceive, dispatch } = useContext(shoppingContext);

  let product = [
    {
      name: "Product 1 ",
      price: 1500,
    },

    {
      name: "Product 2 ",
      price: 2000,
    },

    {
      name: "Product 3 ",
      price: 2500,
    },
  ];



  function AddProduct(index) {
 
    let data = { ...product[index], id: new Date().getTime() };
    setReceive( data )
    console.log(data)

    dispatch({ type: "add", text:data});
  }

  return (
    <div>
      <h1>Products</h1>
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

export default Shopping;
