// import { NavLink } from 'react-router-dom'
// import Logout from '../components/Logout'
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <div className="logo">
          <h2>BLOG</h2>
        </div>
        <div className="navbar">
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="">Blogs</NavLink>
            <NavLink to={<Logout />}>Logout</NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
