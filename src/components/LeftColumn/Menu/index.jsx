import "./styles.css";
import {BsSpeedometer2} from "react-icons/bs";
import {FcTodoList} from "react-icons/fc";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS,BarElement,CategoryScale,LinearScale,Tooltip,Legend,scales} from "chart.js/auto";

function Menu(){
   
    const data ={
        labels:  ["S","M","T","W","T","F","S"],
        datasets:[{
            barPercentage:0.5,
            barThickness: 10,
            BarLength:10,
            data: [5, 4, 5, 6, 9, 7, 6],
            backgroundColor:[
                "#cccccc",
                "#cccccc",
                "#cccccc",
                "#cccccc",
                "#2d2e82",
                "#cccccc",
                "#cccccc",
        ],
            dataLabels:{
                anchor:"end",
                align:"top",
                offset:10,
                color:"black",
            }
        }],
    }
    const options = {
        plugins:{
            legend:{
                display: false,
            }
        },
        scales: {
            y: {
                ticks: {
                    display:false,
                },
                grid: {
                  drawOnChartArea: false,
                  display:false,
                  drawBorder:false,
                },
            },
            x: {
                grid:{
                    drawOnChartArea: false,
                    display:false,
                }
            } 
        }
    }; 
   

    return(
        <div className="menu-container">
            <p className="menu-name">Menu</p>
            <div style={{display:"flex",flexDirection:"column",}}>
                <div className="names-container">
                    <BsSpeedometer2 />
                    <p className="menu-names">Analytics</p>
                    <p className="btn" style={{marginLeft:"45%",}}>Update</p>
                </div>
                <div className="names-container">
                <FcTodoList  />
                    <p className="menu-names">My Candidates</p>
                    <p className="btn" style={{marginLeft:"44%",color:"#4c4d94"}} >24</p>
                </div>
                <div className="names-container">
                    <FcTodoList />
                    <p className="menu-names">My Jobs</p>
                    <p className="btn" style={{marginLeft:"59%",}} >24</p>
                </div>
                <div className="names-container">
                    <FcTodoList />
                    <p className="menu-names">Messages</p>
                    <p className="btn" style={{marginLeft:"54%",color:"#4c4d94"}} >24</p>
                </div>
                <div className="names-container">
                <FcTodoList  />
                    <p className="menu-names">Job Profile</p>
                    <p className="btn" style={{marginLeft:"53%",color:"#4c4d94"}} >24</p>
                </div>
            </div>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25%",alignItems:"center"}}>
                <p className="profile-visibility-txt">Job Posted</p>
                <select className="dropdown">
                    <option>Dialy</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Last 3 Months</option>
                    <option>Last 6 Months</option>
                </select>
                </div>
             <div className="bar-bg">
                <Bar data={data}
                    options={options} />
                </div>  
       
        </div>
    )
}

export default Menu;