import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import About from "./components/About";

const App = () => {
  return (
    <div className="w-full h-screen text-white">
      <nav className="p-5 flex gap-10 justify-center items-center tracking-wider">
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;