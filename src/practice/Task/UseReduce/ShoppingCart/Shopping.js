import React, { useContext } from "react";
import { shoppingContext } from "./Cart";
import Swal from "sweetalert2";

function Shopping() {
  let {  dispatch } = useContext(shoppingContext);

  let product = [
    {
      name: "T-shirt",
      price: 1500,
    },

    {
      name: "Sweat Shirt",
      price: 2000,
    },

    {
      name: "Hoodie ",
      price: 2500,
    },
  ];
  


  function AddProduct(index) {
 
    let data = { ...product[index], id: new Date().getTime() };
    // setReceive( data )
    // console.log(data)

    dispatch({ type: "add", text:data});
    // Swal.fire("SweetAlert2 is working!");
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
