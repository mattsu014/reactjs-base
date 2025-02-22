import { Link, Outlet } from "react-router-dom";

export const Header = () => {
    return(
        <>
            <header>
                <nav>
                <ul>
                    <li>
                    <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                    <Link to={"/about"}>About Us</Link>
                    </li>
                    <li>
                    <Link to={"/user"}>User Account</Link>
                    </li>
                </ul>
                </nav>
            </header>
        </>
    )
};