import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import FeauturedCharts from '../../components/feauturedChart/FeauturedChart'
import Charts from '../../components/charts/Charts'
import TableBox from "../../components/table/Table";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <FeauturedCharts />
          <Charts aspect={2/1} title="Last 6 month (Revenue)"/>
        </div>
        <div className="listContainer">
          <h1 className="title">Latest Transactions</h1>
            <TableBox />
        </div>
      </div>
    </div>
  );
};

export default Home;
