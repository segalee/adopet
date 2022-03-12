import { NavLink } from "react-router-dom";

export function AppHeader() {
    return <section> <nav>
        <NavLink className={(navData) => navData.isActive ? "my-active" : ""} to='/'>Home</NavLink>
        <NavLink className={(navData) => navData.isActive ? "my-active" : ""} to='/about'>About</NavLink>
    </nav></section>

}