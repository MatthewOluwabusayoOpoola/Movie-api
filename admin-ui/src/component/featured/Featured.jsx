import "./Featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined"


const Featured = () => {
  return (
    <div className="featured">
        <div className="top"> 
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
            </div>
            <p className="title">Total sales maded today</p>
            <p className="amount">$400</p>
            <p className="desc">
              Previous transaction processing. Last payment may not be included. 
            </p>           
            <div className="summary">
              <div className="item">
                <div className="Target">Target</div>
                <div className="itemResult negative">
                  <KeyboardArrowDownIcon fontSize="small"/>
                  <div className="resultAmount">$300</div>
                </div>
              </div>
              <div className="item">
                <div className="Target">Last Week</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                  <div className="resultAmount">$100</div>
                </div>
              </div>
              <div className="item">
                <div className="Target">Last Month</div>
                <div className="itemResult positive">
                  <KeyboardArrowUpOutlinedIcon fontSize="small"/>
                  <div className="resultAmount">$300</div>
                </div>
              </div>
            </div>
            
        </div>
    </div>
  )
}

export default Featured