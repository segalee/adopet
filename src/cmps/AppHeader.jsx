import { Link, NavLink } from "react-router-dom";
import logo from '../assets/imgs/logo.png'
export function AppHeader() {
    return <section className="main-header flex">
        <Link to='/'><div className="logo-container"><img className="adopet-logo" src={logo} alt="" /></div></Link>
        <nav>
            <NavLink className={(navData) => navData.isActive ? "my-active" : ""} to='/'>Home</NavLink>
            <NavLink className={(navData) => navData.isActive ? "my-active" : ""} to='/dogs'>Our Dogs</NavLink>
            <NavLink className={(navData) => navData.isActive ? "my-active" : ""} to='/about'>About</NavLink>
        </nav></section>

}