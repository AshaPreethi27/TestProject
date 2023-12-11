import "./styles.css";
import {IoIosArrowForward} from "react-icons/io";
import {BsGenderMale,BsGenderFemale} from "react-icons/bs";
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

function Talent(){
    

const data = [
  {
    count: 55,
    language: "Male",
  },
  {
    count: 45,
    language: "Female",
  },
 
]
   
        return(
            <div>
                 <div className="row-bg">
                    <p className="title">Talent Diversity</p>
                    <IoIosArrowForward color="grey"/>
                    </div>
                    <div className="container-bg">
                    <div className="column-bg" style={{marginBottom:"70px"}}>
                    <div style={{width:"100px",marginTop:"0px",marginBottom:"0px"}}>
                    <ResponsiveContainer height={100} width="100%">
                    <PieChart>
                        <Pie
                        cx="70%"
                        cy="40%"
                        data={data}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="50%"
                        outerRadius="70%"
                        dataKey="count"
                        >
                        <Cell name="Male" fill="#4aacee" />
                        <Cell name="Female" fill="#cf39a7" />
                        </Pie>
                        {/* <Legend
                        // iconType="circle"
                        // layout="vertical"
                        // verticalAlign="middle"
                        // align="right"
                        /> */}
                    </PieChart>
                    </ResponsiveContainer>
                    </div>

                    <p className="text">Gender</p>
                    <div className="container-bg">
                        <BsGenderMale size={30} color={"#2e9feb"} style={{marginRight:"10px"}}/>
                        <div>
                            <p className="text-p">Male</p>
                            <p className="text-p">55</p>
                        </div>
                    </div>
                    <div className="container-bg">
                        <BsGenderFemale size={30} color={"#ec0789"} style={{marginRight:"10px"}} />
                        <div>
                            <p className="text-p">Female</p>
                            <p className="text-p">45</p>
                        </div>
                    </div>
                    </div>
                    <div className="column-bg">
                    <div style={{height:"80px",width:"80px"}}>
                    <CircularProgressbar value={45} text={`${45}%`} styles={buildStyles({
                        textColor:"black",
                        pathColor:"#2e9feb",
                    })} />
                    </div>
                    <p className="text">Ethnicity</p>
                    <div className="row">
                <ul className="li-column-bg">
                <li> <span className="list">Asian</span></li>
                <li ><span className="list">Asian American</span></li>
                <li ><span className="list"> Mexican</span></li>
                <li><span className="list">Puerto Rican</span></li>
                <li   ><span className="list">African American</span></li>    
                <li   ><span className="list">Others</span></li>    
                </ul>  
                <ul className="li-column-bg">
                <li  className="li-num">759</li>
                <li  className="li-num">759</li>
                <li  className="li-num">759</li>
                <li  className="li-num">759</li>
                <li  className="li-num">759</li>    
                <li  className="li-num">759</li>  
                </ul>     
            </div>
                    </div>
                    </div>
            </div>
        )
}

export default Talent;