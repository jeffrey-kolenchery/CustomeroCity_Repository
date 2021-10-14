import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
//import { useHistory } from "react-router-dom";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



class DataTable extends React.Component {

  //ag-Grid hook ready
  onGridReady = params => {
    this.gridApi = params.api;
    params.api.sizeColumnsToFit(); 
    
  };
  
  
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
  render() {
      //Hard coded data for checking validity
    const contactList = [
    {name: "Toyota", email: "Celica", company: "FB", role: "Developer"},
    {name: "Ford", email: "Mondeo@GMAILLLLLLLLLLLLLLLLLLL.com", company: "FB", role: "Developer"},
    {name: "Porsche", email: "Boxter", company: "FB", role: "Developer"}
    ];
  return (
    <div>
      <button onClick={() => this.gridApi.applyTransaction({add: [{}]})}>Add Row</button>
      <div className="ag-theme-alpine" style={{ width: '60vw', height: '100vh'}} >
        
        <AgGridReact
          onGridReady={this.onGridReady}
          rowData={contactList}
          rowSelection="single">
          <AgGridColumn field="name" sortable={ true } filter={ true } editable= { true }></AgGridColumn>
          <AgGridColumn field="email" sortable={ true } filter={ true } editable= { true }></AgGridColumn>
          <AgGridColumn field="company" sortable={ true } filter={ true } editable= { true }></AgGridColumn>
          <AgGridColumn field="role" sortable={ true } filter={ true } editable= { true }></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
  }

  

  
};

export default DataTable;