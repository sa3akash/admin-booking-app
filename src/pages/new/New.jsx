import "./new.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import { DriveFolderUpload } from "@mui/icons-material"
import { useState } from "react"

const New = ({inputs, title}) => {

  const [file, setFile] = useState('')
  console.log();

  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        <div className="top">
          <h1 className="title">{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="Upload Img" />
          </div>
          <div className="right">
            <form className="rightForm">
                <div className="formInput">
                  <label htmlFor="file"><span>Image:</span><DriveFolderUpload className="fileIcon"/></label>
                  <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} style={{display:'none'}}/>
                </div>

               {
                 inputs.map((data)=>(
                  <div className="formInput" key={data.id}>
                  <label>{data.label}</label>
                  <input type={data.type} placeholder={data.placeholder}/>
                </div>
                 ))
               }
                
                <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
