import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function DataTableExample() {
  const [details, setDetails] = useState([]);
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


  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setDetails(res.products);
        console.log(res.products);
      });
  },[]);
  const column = [
    {
      name: "title ",
      selector: row => row.title,
      sortable : true
    },
    {
        name: "price",
        selector: row =>row.price,
        sortable : true
    }
  ];

  return <div>DataTableExample
    <DataTable
    columns={column}
    data={details}
    customStyles={customStyles}
    selectableRows
    pagination
    paginationPerPage={5}
    paginationRowsPerPageOptions={[5,10,15]}
    selectableRowsHighlight
    highlightOnHover
    />
  </div>;
}

export default DataTableExample;
