import { NavLink } from "react-router-dom";

const linksStyle = {
    padding: "5px"
}


function Navbar() {
    return (
        <div className="Nav">
            <NavLink
                to="/"
                exact
                style={linksStyle}
            >
                Home
            </NavLink>
            <NavLink
                to="/teachers"
                exact
                style={linksStyle}
            >
                Teachers
            </NavLink>
            <NavLink
                to="/students"
                exact
                style={linksStyle}
            >
                Students
            </NavLink>
            <NavLink
                to="/teacher_hire"
                exact
                style={linksStyle}
            >
                Teacher Application
            </NavLink>
            <NavLink
                to="/student_signup"
                exact
                style={linksStyle}
            >
                Student Sign Up
            </NavLink>
        </div>
    )
}

export default Navbar