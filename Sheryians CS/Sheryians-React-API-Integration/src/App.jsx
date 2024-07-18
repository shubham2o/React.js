import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Show from "./components/Show";

const App = () => {
  return (
    <div>
      <nav className="p-5 flex justify-center gap-10 bg-black text-white">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/show">Show</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/show" element={<Show />} />
      </Routes>
    </div>
  )
}

export default App;