import React from 'react';
import Swal from 'sweetalert2';

function SwalData() {

    let deleteDetails={
    


    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            const { value: text } = Swal.fire({
                input: "textarea",
                inputLabel: "Message",
                inputPlaceholder: "Type your message here...",
                inputAttributes: {
                  "aria-label": "Type your message here"
                },
                showCancelButton: true,

                


              });

              
              if (text) {
                Swal.fire(text);
              }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your file has been not Deleted",
            icon: "error"
          });
        }
      });


     



  return (
    <div>SwalData</div>
  )
}

export default SwalData