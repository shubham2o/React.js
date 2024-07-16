import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Home />}
            />

            <Route
                path="/User"
                element={<User />}
            />

            <Route
                path="/About"
                element={<About />}
            />
        </Routes>
    )
}

export default Routing;