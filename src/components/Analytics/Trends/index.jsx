import "./styles.css";
import {IoIosArrowForward} from "react-icons/io";
import {TfiBriefcase} from "react-icons/tfi";
import {Chart as ChartJs,ArcElement,Tooltip,Legend} from "chart.js/auto";
import {Doughnut} from "react-chartjs-2";

function Trends(){
    const data={
            labels:[],
            datasets:[{
                label:'Poll',
                data:[2759,1147,342,212,173],
                backgroundColor:['#2d2e82','#1872d3','#39dac4','#f9d800','#df3838'],
                borderColor:['#2d2e82','#1872d3','#39dac4','#f9d800','#df3838'],
            }]
    }
    const options={

    }
    return(
        <div>
            <div className="row-bg">
            <p className="title">Vacancies Filled</p>
            <IoIosArrowForward color="grey"/>
            </div>
            <div style={{width:'40%',height:'40%',marginLeft:"30%"}}>
                <Doughnut
                data={data}
                options={options}
                ><TfiBriefcase />
                </Doughnut>
            </div>
            <div className="labels-bg">
                <ul >
                <li style={{color:"#2b2c7e"}}> <span className="labels">Data Scientist</span></li>
                <li style={{color:"#1872d4"}}><span className="labels">iOS Developer</span></li>
                <li style={{color:"#39dac4"}}><span className="labels"> Product Designer</span></li>
                <li style={{color:"#f9d800"}}><span className="labels">Design Lead</span></li>
                <li  style={{color:"#e23939"}} ><span className="labels">Operation Manager</span></li>    
                </ul>  
                <ul>
                <li  className="num">2759</li>
                <li  className="num">1147</li>
                <li  className="num">342</li>
                <li  className="num">212</li>
                <li  className="num">173</li>    
                </ul>     
            </div>
        </div>
    )
}

export default Trends;