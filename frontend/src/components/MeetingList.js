import React, { useState, useEffect } from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
//import { useHistory } from "react-router-dom";

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';



class Meeting extends React.Component {

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
    const meetingList = [
    {location: "Sydney", email: "Celica", company: "FB", role: "Developer", date: "19/01/2000"},
    {location: "Melbourne", email: "Mondeo@GMAILLLLLLLLLLLLLLLLLLL.com", company: "FB", role: "Developer", date: "18/03/2010"},
    {location: "Brisbane", email: "Boxter", company: "FB", role: "Developer", date: "13/12/2021"}
    ];

    const filterParams = {
        comparator: (filterLocalDateAtMidnight, cellValue) => {
          const dateAsString = cellValue;
          const dateParts = dateAsString.split('/');
          const cellDate = new Date(
            Number(dateParts[2]),
            Number(dateParts[1]) - 1,
            Number(dateParts[0])
          );
      
          if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
            return 0;
          }
      
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          }
      
          if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          }
        },
        buttons: ['reset','apply']
      };
  return (
    <div>
      <button onClick={() => this.gridApi.applyTransaction({add: [{}]})}>Add Row</button>
      <div className="ag-theme-alpine" style={{ width: '60vw', height: '100vh'}} >
        
        <AgGridReact
          onGridReady={this.onGridReady}
          rowData={meetingList}
          rowSelection="single">
          <AgGridColumn field="location" sortable={ true } filter={ true } editable= { true }></AgGridColumn>
          <AgGridColumn field="email" sortable={ true } filter={ true } editable= { true }></AgGridColumn>
          <AgGridColumn field="company" sortable={ true } filter={ true } editable= { true }></AgGridColumn>
          <AgGridColumn field="role" sortable={ true } filter={ true}  editable= { true }></AgGridColumn>
          <AgGridColumn field="date" sortable={ true } filter={ 'agDateColumnFilter' } filterParams={ filterParams } editable= { true }></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
  }

  

  
};

export default Meeting;