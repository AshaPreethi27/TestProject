import "./styles.css";
import {IoIosArrowForward}  from "react-icons/io";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Vacancies(){
    return(
        <div>
            <div className="row-bg">
            <p className="title">Vacancies Filled</p>
            <IoIosArrowForward color="grey"/>
            </div>
            <div className="row-bg">
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{height:"35px",width:"35px",marginRight:"10px"}}>
                    <CircularProgressbar value={72} text={`${72}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#0b7e71",
                    })} />
                    </div>
                <p className="occupation">Data Scientist</p>
                </div>
                <p className="fraction" >25/30</p>
            </div>
            <div className="row-bg">
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{height:"35px",width:"35px",marginRight:"10px"}}>
                    <CircularProgressbar value={72} text={`${72}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#0b7e71",
                    })} />
                    </div>
                <p className="occupation">iOS Developer</p>
                </div>
                <p className="fraction" >25/30</p>
            </div>
            <div className="row-bg">
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{height:"35px",width:"35px",marginRight:"10px"}}>
                    <CircularProgressbar value={50} text={`${50}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#f8da10",
                    })} />
                    </div>
                <p className="occupation">Product Designer</p>
                </div>
                <p className="fraction" >25/30</p>
            </div>
            <div className="row-bg">
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{height:"35px",width:"35px",marginRight:"10px"}}>
                    <CircularProgressbar value={25} text={`${25}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#e23e3e",
                    })} />
                    </div>
                <p className="occupation">Design Lead</p>
                </div>
                <p className="fraction" >25/30</p>
            </div>
            <div className="row-bg">
                <div style={{display:"flex",alignItems:"center"}}>
                <div style={{height:"35px",width:"35px",marginRight:"10px"}}>
                    <CircularProgressbar value={25} text={`${25}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#e23e3e",
                    })} />
                    </div>
                <p className="occupation">Operations Manager</p>
                </div>
                <p className="fraction" >25/30</p>
            </div>
        </div>
    )
}

export default Vacancies;