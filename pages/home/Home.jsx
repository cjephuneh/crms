import Sidebar from "../../src/components/sidebar/Sidebar";
import Navbar from "../../src/components/navbar/Navbar";
import "./home.scss";
import Widget from "../../src/components/widget/Widget";
import Featured from "../../src/components/featured/Featured";
import Chart from "../../src/components/chart/Chart";
import Table from "../../src/components/table/Table";

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
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
