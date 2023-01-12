import "./styles.css";
import {CgCopyright} from "react-icons/cg";

function Footer(){

    return(
        <div className="footer-bg">
            <div style={{display:"flex"}}>
            <CgCopyright color="#4c535f" className="icon-c" size={15} />
            <p className="foot-txt">Career Munzil LLC. All Rights Reserved</p>
            </div>
            <div  style={{display:"flex",}}>
            <CgCopyright color="#4c535f" className="icon-c" size={15} />
            <p className="foot-txt">Privacy Policy | Terms of Use | Contact Us</p>
            </div>
        </div>
    )
}

export default Footer;