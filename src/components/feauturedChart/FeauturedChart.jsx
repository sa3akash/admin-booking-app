import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreVert,
} from "@mui/icons-material";
import "./feauturedChart.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const FeauturedChart = () => {
  return (
    <div className="feauturedChart">
      <div className="top">
        <h1 className="title">top revenue</h1>
        <MoreVert fontSize="small" />
      </div>
      <div className="bottom">
        <div className="chartProgress">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">total sales made today</p>
        <p className="amount">$450</p>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quod.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDown fontSize="small" />
              <div className="resultAmmount ">12.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmmount ">322.3k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUp fontSize="small" />
              <div className="resultAmmount">122.3k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeauturedChart;
