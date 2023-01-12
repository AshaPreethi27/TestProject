import "./styles.css";
import Profile from "./Profile";
import Menu from "./Menu";


function LeftColumn () {
    return(
        <div className="left-container">
            <Profile />
            <Menu />
           
        </div>
    )
}

export default LeftColumn;