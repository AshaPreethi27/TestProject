import "./styles.css";

function Notifications () {
    return(
        <div className="recommended-jobs-container">
            <p className="head-name">Notifications</p>
            <div style={{display:"flex",flexDirection:"column",}}>
                <div className="notifications-container">
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Pending Actions</p>
                    <p className="post-jd" >Update Education details</p>
                    </div>
                    <div>
                    <p className="count" >24</p>
                    </div>
                </div>
                <div className="notifications-container">
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Job from recruiters</p>
                    <p className="post-jd" >Job | Inviting applications for operations</p>
                    </div>
                    <div>
                    <p className="count" >24</p>
                    </div>
                </div>
                <div className="notifications-container">
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Promotional Offer</p>
                    <p className="post-jd" >CMJOB20-20% off</p>
                    </div>
                    <div>
                    <p className="count" >24</p>
                    </div>
                </div>
                <div className="notifications-container">
                    <div style={{display:"flex",flexDirection:"column",marginBottom:"0px",marginTop:"0px"}}>
                    <p className="jobpost-name">Recruiter Searches</p>
                    <p className="post-jd" >KeySkills,Resume</p>
                    </div>
                    <div>
                    <p className="count" >24</p>
                    </div>
                </div>
             
 
          
            </div>
            
        </div>
    )
}

export default Notifications;