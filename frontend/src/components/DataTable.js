import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
//import { useHistory } from "react-router-dom";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const DataTable = () => {

  
  //Hard coded data for checking validity
  const contactList = [
      {name: "Toyota", email: "Celica", company: "FB", role: "Developer"},
      {name: "Ford", email: "Mondeo", company: "FB", role: "Developer"},
      {name: "Porsche", email: "Boxter", company: "FB", role: "Developer"}
  ];
  
  /*
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
    }, []);
  

  const history = useHistory();
  const onButtonClick = () => {
    //redirects to user profile for that contact
    history.push("/profile");
  }
  */

  

  return (
      <div className="ag-theme-alpine" style={{height: '40vh', width: '100vh'}}>
          
          <AgGridReact
            rowData={contactList}
            rowSelection="single">
            <AgGridColumn field="name" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="email" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="company" sortable={ true } filter={ true }></AgGridColumn>
            <AgGridColumn field="role" sortable={ true } filter={ true }></AgGridColumn>
          </AgGridReact>
      </div>
  );
};

export default DataTable;