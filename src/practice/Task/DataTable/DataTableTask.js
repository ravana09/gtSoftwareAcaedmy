import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function DataTableTask() {
  let [datas, setdatas] = useState();
  //add
  let [formdata, setFormData] = useState({
    category: "",
    description: "",
  });

  function handleChanges(e) {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    try {
      axios
        .get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
        .then((res) => {
          setdatas(res.data.categoryList);
          console.log(res.data.categoryList);
        });
      throw new Error("cannot display the details");
    } catch (err) {
      console.log(err.message);
    }
  }, []);

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
        minHeight: "30px",
        fontSize: "20px",
      },
    },
  };

  //delete

  function handleDelete(id) {
    console.log(id);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const { value: text } = Swal.fire({
            input: "textarea",
            inputLabel: "Message",
            inputPlaceholder: "Type your message here...",
            inputAttributes: {
              "aria-label": "Type your message here",
            },
            showCancelButton: true,
          });
          let deletedItems = {
            categoryId: id,
            removedRemarks: text,
          };

          console.log(deletedItems)
          try {

            
            axios.post(
              'http://catodotest.elevadosoftwares.com/Category/RemoveCategory',
              deletedItems
            )
            throw new Error("it is not deleted ");
          } catch (err) {
            console.log(err);
          }

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
            icon: "error",
          });
        }
      });
  }
//added
  
  let addedata = {
    categoryId: 0,
    category: formdata.category,
    description: formdata.description,
  };

  function handleSubmit(e) {
    e.preventDefault();
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.post(
            "http://catodotest.elevadosoftwares.com/Category/InsertCategory",
            addedata
          );
          throw new Error("Date has been not posted").then((res) =>
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your Data has been Added",
              showConfirmButton: false,
              timer: 1500,
            })
          );
        } catch (err) {
          console.log(err.message);
        }
      } else if (result.isDenied) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "your data is not added",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }

  const column = [
    {
      name: "categoryId",
      selector: (row) => row.categoryId,
      sortable: true,
    },
    {
      name: "category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <div>
          <Button
            onClick={() => {
              handleDelete(row.categoryId);
            }}
            style={{
              width: 50,
              height: 50,
            }}
          >
            {" "}
            <i class="bi bi-trash3-fill"></i>{" "}
          </Button>
          <Button
            style={{
              width: 50,
              height: 50,
            }}
          >
            <i class="bi bi-file-earmark-plus-fill"></i>
          </Button>
        </div>
      ),
    },
  ];


  return (
    <div>
      <h1>DataTableTask</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          value={formdata.category}
          onChange={handleChanges}
        />
        <input
          type="text"
          name="description"
          value={formdata.description}
          onChange={handleChanges}
        />
        <button type="submit">Add</button>
      </Form>
      <DataTable columns={column} data={datas} customStyles={customStyles} />
    </div>
  );
}

export default DataTableTask;
