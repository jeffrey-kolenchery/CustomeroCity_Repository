import React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
  {
    field: 'company',
    headerName: 'Company',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'Role',
    type: 'number',
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 6, lastName: 'Melisandre', firstName: null, email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'xxx@gmail.com', company: 'FB', role: 'Developer' },
];

const DataTable = () => {
  return (
        <div className="DataGrid">
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection />
        </div>
  );
}

export default DataTable
