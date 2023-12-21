// import { NavLink } from 'react-router-dom'
// import Logout from '../components/Logout'
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar-header">
        <div className="logo">
          <h1>BLOG</h1>
        </div>
        <div className="navbar">
          <a href="#">Home</a>
          <a href="#">Blogs</a>
          <a href="#">Logout</a>
            {/* <NavLink to="/">Home</NavLink>
            <NavLink to="">Blogs</NavLink>
            <NavLink to={<Logout />}>Logout</NavLink> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
