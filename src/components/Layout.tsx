import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <div>
            <Header />
            <h1>Home Page</h1>
            <Outlet />
        </div>
    );
}
