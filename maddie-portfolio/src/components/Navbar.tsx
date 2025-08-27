import { NavLink } from "react-router-dom";

export default function Navbar(){
  return (
    <header className="navbar">
      <div className="container inner">
        <NavLink to="/about" className={({isActive}) => "navlink" + (isActive? " active": "")}>about</NavLink>
        <NavLink to="/projects" className={({isActive}) => "navlink" + (isActive? " active": "")}>projects</NavLink>
        <NavLink to="/contact" className={({isActive}) => "navlink" + (isActive? " active": "")}>contact</NavLink>
      </div>
    </header>
  );
}
