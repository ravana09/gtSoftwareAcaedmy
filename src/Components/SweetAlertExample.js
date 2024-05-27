import React from "react";
import Swal from "sweetalert2";

function SweetAlertExample() {
  function click() {
    Swal.fire({
      title: "Are you confirm?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      showDenyButton: true,
      cancelButtonColor: "#d33",
      showCloseButton:true,
      

     
      confirmButtonText: "Yes, delete it!",
      denyButtonText: "Don't Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      } else if (result.isDenied) {
        Swal.fire({
          title: "Cancelled",
          text: "the file was not deleted",
          icon: "warning",
        });
      }
    
    });
  }
  return <div>SweetAlertExample
    <button onClick={click}>Click</button>
  </div>;
}

export default SweetAlertExample;
