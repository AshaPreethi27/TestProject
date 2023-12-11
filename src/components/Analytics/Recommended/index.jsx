import "./styles.css";
import {IoIosArrowForward} from "react-icons/io";

function Recommended() {
    return(
        <div className="recommended-jobs-container">
            <div  style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"0px",marginBottom:"0px"}}>
            <p className="head-name">Recommended Jobs</p>
            <select className="dropdown">
                    <option>Dialy</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Last 3 Months</option>
                    <option>Last 6 Months</option>
                </select>
                </div>
            <div style={{display:"flex",flexDirection:"column",marginTop:"0px",marginBottom:"0px"}}>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="pro-pic" className="pro-pic"/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="post-name">Myla Clark</p>
                    <p className="post-jd" >Store Manager</p>
                    </div>
                    </div>
                   <p className="post-jd" style={{color:"#57589b",fontSize:"13px",paddingRight:"10px"}}>Show Interest</p>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="pro-pic" className="pro-pic"/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="post-name">Myla Clark</p>
                    <p className="post-jd" >Store Manager</p>
                    </div>
                    </div>
                   <p className="post-jd" style={{color:"#57589b",fontSize:"13px",paddingRight:"10px"}}>Show Interest</p>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="pro-pic" className="pro-pic"/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="post-name">Myla Clark</p>
                    <p className="post-jd" >Store Manager</p>
                    </div>
                    </div>
                   <p className="post-jd" style={{color:"#57589b",fontSize:"13px",paddingRight:"10px"}}>Show Interest</p>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="pro-pic" className="pro-pic"/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="post-name">Myla Clark</p>
                    <p className="post-jd" >Store Manager</p>
                    </div>
                    </div>
                   <p className="post-jd" style={{color:"#57589b",fontSize:"13px",paddingRight:"10px"}}>Show Interest</p>
                </div>
                <div className="job-container">
                <div  style={{display:"flex",flexDirection:"row",}} >
                <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="pro-pic" className="pro-pic"/>
                    <div style={{display:"flex",flexDirection:"column"}}>
                    <p className="post-name">Myla Clark</p>
                    <p className="post-jd" >Store Manager</p>
                    </div>
                    </div>
                   <p className="post-jd" style={{color:"#57589b",fontSize:"13px",paddingRight:"10px"}}>Show Interest</p>
                </div>
                
            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <p className="more">See More</p>
            <IoIosArrowForward size={18} className="icon-arrow"  color="#5f609f"/>
            </div>
        </div>
    )
}

export default Recommended;