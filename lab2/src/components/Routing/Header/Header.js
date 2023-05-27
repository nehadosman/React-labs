import { NavLink } from "react-router-dom";
let Header = ()=>{
    return(
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark bg-dark d-flex justify-content-around p-3 text-decoration-none" data-bs-theme="dark">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-decoration-none" id="navbarNavAltMarkup">
            <li><NavLink style={({isActive})=>({color:isActive?'yellow':'white'})} to={"/"}>Home</NavLink></li>
            <li><NavLink style={({isActive})=>({color:isActive?'yellow':'white'})} to={"/users/1"}>User Details</NavLink></li>
            <li><NavLink style={({isActive})=>({color:isActive?'yellow':'white'})} to={"/profile"}>Profile</NavLink></li>
            <li><NavLink style={({isActive})=>({color:isActive?'yellow':'white'})} to={"/khaiff"}>Error</NavLink></li>
            </div>

            </nav>
        </div>
    )
}
export default Header;