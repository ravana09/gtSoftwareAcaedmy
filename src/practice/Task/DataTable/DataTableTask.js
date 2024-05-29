import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";

function DataTableTask() {

  //fetching state
  let [datas, setdatas] = useState();
  //add and update state
  let [formdata, setFormData] = useState({
    id:'',
    category: "",
    description: "",
  });

  //button state 
  let [button, setButteon] = useState("Add");

  //buttonfunction to add and update

  let [changeButton, setchangeButton] = useState(false);

  //Multistate
  function handleChanges(e) {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  }

  //to fetch data
  useEffect(() => {
    try {
      axios
        .get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
        .then((res) => {
          setdatas(res.data.categoryList);
          // console.log(res.data.categoryList);
        });
      // throw new Error("cannot display the details");
    } catch (err) {
      console.log("Error has benn fetched :", err.message);
    }
  }, [datas]);

  //data table design
  const customStyles = {
    rows: {
      style: {
        minHeight: "72px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
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

  //fuunction of buttons and input



  useEffect(() => {
    try {
      axios
        .get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
        .then((res) => {
          setdatas(res.data.categoryList);
          // console.log(res.data.categoryList);
        });
      throw new Error("cannot display the details");
    } catch (err) {
      console.log(err.message);
    }
  }, [datas]);

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
            Swal.fire({
              input: "textarea",
              inputLabel: "Message",
              inputPlaceholder: "Type your message here...",
              inputAttributes: {
                "aria-label": "Type your message here",
              },
              showCancelButton: true,
            }).then((textareaResult) => {
              if (textareaResult.isConfirmed) {
                let deletedItems = {
                  categoryId: id,
                  removedRemarks: textareaResult.value,
                };
  
                axios
                  .post(
                    "http://catodotest.elevadosoftwares.com/Category/RemoveCategory",
                    deletedItems
                  )
                  .then((res) => {
                    if (res.status === 200) {
                      const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        },
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Deleted successfully",
                      });
                    } else {
                      throw new Error("Failed to delete: " + res);
                    }
                  })
                  .catch((err) => {
                    console.log(err);
                    Swal.fire({
                      position: "top-end",
                      icon: "error",
                      title: "Failed to delete data",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  });
              }
            });
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your file has not been deleted",
              icon: "error",
            });
          }
        });
    }

  //added
 

  function handleAdd() {

    let addedata = {
      categoryId: 0,
      category: formdata.category,
      description: formdata.description,
    };

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .post(
              "http://catodotest.elevadosoftwares.com/Category/InsertCategory",
              addedata
            )

            .then((res) => {
              if (res.status === 200) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Data has been Added",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setFormData({ category: "", description: "" });
              } else {
                throw new Error("Error:Date has been not posted");
              }
            });
        } catch (err) {
          console.log(err.message);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to add data",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({ category: "", description: "" });
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

  //submit to add and update

  function handleSubmit(e) {
    e.preventDefault();

    if (!changeButton) {
      handleAdd();
    } else {
      handleUpdate();
      setButteon('Add')
    }
  }

  //update button changed

  function handleEdit(row) {
    setButteon("Update");
    setchangeButton(true);
    setFormData({id:row.categoryId, category: row.category, description: row.description });


  }

  //update

  function handleUpdate(){

    let updatedata = {
      categoryId: formdata.id,
      category: formdata.category,
      description: formdata.description,
    };
    
    Swal.fire({
      title: "Do you want to Update the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios
            .post(
              "http://catodotest.elevadosoftwares.com/Category/InsertCategory",
              updatedata
            )

            .then((res) => {
              if (res.status === 200) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Your Data has been Updated",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setFormData({ category: "", description: "" });
              } else {
                throw new Error("Error:Date has been not posted");
              }
            });
        } catch (err) {
          console.log(err.message);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to Update data",
            showConfirmButton: false,
            timer: 1500,
          });
          setFormData({ category: "", description: "" });
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
            onClick={() => {
              handleEdit(row);
            }}
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
        <button type="submit">{button}</button>
      </Form>
      <DataTable columns={column} data={datas} customStyles={customStyles} />
    </div>
  );
}

export default DataTableTask;
