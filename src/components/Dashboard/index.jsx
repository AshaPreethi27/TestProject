import "./styles.css";
import MyJobs from "./MyJobs";


function Dashboard() {

    return(
        <div className="dashboard-bg">
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"93%",}}>
            <p className="head">My Jobs</p>
            <div style={{display:"flex",}}>
            <select className="dropdown">
                    <option>Full Time</option>
                    <option>Part Time</option>
                    <option>Contract</option>
                    <option>Internship</option>
                </select>
                <select className="dropdown">
                    <option>UI UX Designer</option>
                    <option>Store Manager</option>
                    <option>Project Manager</option>
                    <option>Marketing</option>
                </select>
            </div>
            </div>
            <MyJobs/>
        </div>
    )
}

export default Dashboard;