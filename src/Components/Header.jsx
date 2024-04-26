import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="grid grid-cols-4 mx-[10%] bg-gray-200">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/signin'>Sign In</NavLink>
           
        </div>
    );
};

export default Header;