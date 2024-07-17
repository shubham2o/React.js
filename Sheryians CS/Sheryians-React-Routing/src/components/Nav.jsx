import { NavLink } from "react-router-dom";

const Nav = () => {
    const isActiveStyle = event => event.isActive ? { color: "rgb(250 204 21)", fontWeight: "bold" } : event;

    return (
        <nav className="p-5 flex justify-center items-center gap-10 tracking-wide" >
            <NavLink
                to="/"
                style={isActiveStyle}
            >
                Home
            </NavLink>

            <NavLink
                to="/user"
                style={isActiveStyle}
            >
                User
            </NavLink>

            <NavLink
                to="/about"
                style={isActiveStyle}
            >
                About
            </NavLink>
        </nav>
    )
}

export default Nav;