import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import About from "./components/About";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-800 text-white">
      <nav className="p-5 flex justify-center items-center gap-10" >
        <Link
          to="/"
        >
          Home
        </Link>

        <Link
          to="/User"
        >
          User
        </Link>

        <Link
          to="/About"
        >
          About
        </Link>
      </nav>

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
    </div>
  )
}

export default App;