import "./styles.css";
import {FaLongArrowAltUp} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";
import {BsGenderMale,BsGenderFemale} from "react-icons/bs";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Recommended from "./Recommended";
import Candidates from "./Candidates";
import Postedjobs from "./Postedjobs";
import Notifications from "./Notifications";
import Vacancies from "./Vacancies";
import Trends from "./Trends";
import Talent from "./Talent";
import Progressbar from "./ProgressBar";


function Analytics(){
    return(
        <div className="analytics-bg">
            <p className="wish">Good Afternoon Mr.Sharat</p>
            <div className="container-bg">
                <div>
                    <p className="text">Filter by Role</p>
                    <p className="text">Time Period</p>
                </div>
                <div className="dropdown-bg">
                <select className="dropdown">
                    <option>All</option>
                    <option>UI UX Designer</option>
                    <option>Store Manager</option>
                    <option>Project Manager</option>
                    <option>Marketing</option>
                </select>
                <select className="dropdown">
                    <option>Last Month</option>
                    <option>Last 3 Months</option>
                    <option>Last 6 Months</option>
                    <option>Last 12 Months</option>
                </select>
                </div>
                <div className="category-bg">
                <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="head-txt">Applied</p>
                    <div style={{display:"flex",}}>
                    <p className="number">25</p>
                    <FaLongArrowAltUp size={12} color="#16a87c" className="arrow-icon" />
                    <p className="percent">10%</p>
                    </div>
                    </div>
                   <div style={{height:"45px",width:"45px"}}>
                    <CircularProgressbar value={72} text={`${72}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#1872d4",
                    })} />
                    </div>
                </div>
                <div className="category-bg">
                <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="head-txt">Interested</p>
                    <div style={{display:"flex",}}>
                    <p className="number">17</p>
                    <FaLongArrowAltUp size={12} color="#16a87c" className="arrow-icon" />
                    <p className="percent">6%</p>
                    </div>
                    </div>
                   <div style={{height:"45px",width:"45px"}}>
                    <CircularProgressbar value={87} text={`${87}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#027a6c",
                    })} />
                    </div>
                </div>
                <div className="category-bg">
                <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="head-txt">Shortlisted</p>
                    <div style={{display:"flex",}}>
                    <p className="number">21</p>
                    <FaLongArrowAltUp size={12} color="#16a87c" className="arrow-icon" />
                    <p className="percent">8%</p>
                    </div>
                    </div>
                   <div style={{height:"45px",width:"45px"}}>
                    <CircularProgressbar value={59} text={`${59}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#3fe3cd",
                    })} />
                    </div>
                </div>
                <div className="category-bg">
                <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="head-txt">Applied</p>
                    <div style={{display:"flex",}}>
                    <p className="number">12</p>
                    <FaLongArrowAltUp size={12} color="#16a87c" className="arrow-icon" />
                    <p className="percent">2%</p>
                    </div>
                    </div>
                   <div style={{height:"45px",width:"45px"}}>
                    <CircularProgressbar value={25} text={`${25}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#e23b3b",
                    })} />
                    </div>
                </div>
            </div>
            <div className="container-bg">
                <div className="tracker-bg"><Progressbar />
                </div>
                <div className="right-container-bg"><Talent/></div>
                </div>
            <div className="container-bg">
               <div className="middle-container-bg" style={{marginRight:"10px"}}><Notifications /></div>
               <div className="middle-container-bg" style={{marginLeft:"10px"}}><Vacancies /></div> 
               <div className="right-container-bg"><Trends />
                </div>
            </div>
            <div className="container-bg">
               <div className="middle-container-bg" style={{marginRight:"10px"}}><Recommended /></div>
               <div className="middle-container-bg" style={{marginLeft:"10px"}}><Candidates /></div> 
               <div className="right-container-bg"><Postedjobs />
                </div>
            </div>
        </div>
        
    )
} 

export default Analytics;