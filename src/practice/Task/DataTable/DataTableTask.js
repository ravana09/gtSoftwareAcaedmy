import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { Form } from "react-bootstrap";
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
      console.log(err);
    }
  }, [datas]);

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
        selector:row=><div ><i class="bi bi-trash3-fill" ></i> <i class="bi bi-file-earmark-plus-fill">Update</i></div>

    }
  ];

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

    const customStyles = {
        rows: {
            style: {
                minHeight: '72px', // override the row height
            },
        },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '8px',
                color:'green',
                backgroundColor:'black'
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '8px',
            },
        },
    };


  }

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
      <DataTable columns={column}
       data={datas} 
        />
    </div>
  );
}

export default DataTableTask;
