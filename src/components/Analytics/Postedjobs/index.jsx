import "./styles.css";
import {FcGoogle} from "react-icons/fc";
import {BsBookmark,BsFillCheckCircleFill} from "react-icons/bs";
import {IoIosArrowForward} from "react-icons/io";

function Postedjobs () {
    return(
        <div className="recommended-jobs-container">
            <p className="head-name">Posted Jobs</p>
            <div style={{display:"flex",flexDirection:"column",}}>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                    <FcGoogle className="icon-g" size={25} />
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Operations Manager(Bank)</p>
                    <p className="post-jd" >Google LLC.</p>
                    </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    <BsFillCheckCircleFill className="icon-arrow" size={15} color="#00796b" />
                    <p className="post-jd" style={{color:"#00796b"}}>Applied</p>
                    </div>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                    <FcGoogle className="icon-g" size={25} />
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Operations Manager(Bank)</p>
                    <p className="post-jd" >Google LLC.</p>
                    </div>
                    </div>
                    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    <BsFillCheckCircleFill className="icon-arrow" size={15} color="#00796b" />
                    <p className="post-jd" style={{color:"#00796b"}}>Applied</p>
                    </div>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                    <FcGoogle className="icon-g" size={25} />
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Operations Manager(Bank)</p>
                    <p className="post-jd" >Google LLC.</p>
                    </div>
                    </div>
                    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    <BsFillCheckCircleFill className="icon-arrow" size={15} color="#00796b" />
                    <p className="post-jd" style={{color:"#00796b"}}>Applied</p>
                    </div>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                    <FcGoogle className="icon-g" size={25} />
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Operations Manager(Bank)</p>
                    <p className="post-jd" >Google LLC.</p>
                    </div>
                    </div>
                    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    <BsFillCheckCircleFill className="icon-arrow" size={15} color="#00796b" />
                    <p className="jobpost-name" style={{color:"#00796b"}}>Applied</p>
                    </div>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                    <FcGoogle className="icon-g" size={25} />
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Operations Manager(Bank)</p>
                    <p className="post-jd" >Google LLC.</p>
                    </div>
                    </div>
                    <div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginRight:"10px"}}>
                    <BsFillCheckCircleFill className="icon-arrow" size={15} color="#00796b" />
                    <p className="post-jd" style={{color:"#00796b"}}>Applied</p>
                    </div>
                </div>
              
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p className="more">See More</p>
            <IoIosArrowForward size={18} className="icon-arrow"  color="#5f609f"/>
            </div>
            </div>
            
        </div>
    )
}

export default Postedjobs;