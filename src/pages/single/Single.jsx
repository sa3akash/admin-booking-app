import "./single.scss"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/charts/Charts'
import Table from '../../components/table/Table'


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singlePageContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?cs=srgb&dl=pexels-tu%E1%BA%A5n-ki%E1%BB%87t-jr-1382731.jpg&fm=jpg" alt="" />
              <div className="details">
                <h1 className="itemNameTitle">Sumi Sen</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">sumi@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+880 1967 999 999</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Sherpur 2100 , Dhaka</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Bangladesh</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={4/1} title="User Spending Last (6 month)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="bottomTitle">Latest Transactions</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Single