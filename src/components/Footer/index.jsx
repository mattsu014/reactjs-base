import { Link, Outlet } from "react-router-dom";

export const Footer = () => {
    return(
        <>
        <footer>
            <p>Website created by <Link to={"https://github.com/mattsu014"}>@mattsu014</Link></p>
        </footer>
        </>
    )
};