import { NavLink } from "react-router-dom";

export function AppHeader() {
    return <section> <nav>
        <NavLink activeClassName="my-active" exact to='/'>Home</NavLink>
        <NavLink activeClassName="my-active" to='/about'>About</NavLink>
    </nav></section>

}