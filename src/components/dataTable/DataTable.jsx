import "./dataTable.scss"
import {userColumns,userRows} from '../../tableData'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useState } from "react";

const DataTable = () => {
  const [data, setData] = useState(userRows)
    
  const handleDelete = (id)=>{
    setData(data.filter(item=> item.id !== id))
  }
    const actionCollumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params)=>{
                return (
                    <div className="cellAction">
                      <Link to='/users/text'>
                        <button className="viewButton">View</button>
                        </Link>
                        <button className="deleteButton" onClick={()=>handleDelete(params.row.id)}>Delete</button>
                    </div>
                )
            }
          },
    ]
  return (
    < >
    <div style={{ height: 600, width: '100%' }} className="datatable">
      <div className="dataTableTitle">
        <span>Add New User</span>
        <Link to='/users/new'>
          <button>Add New</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionCollumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
    </>
  )
}

export default DataTable