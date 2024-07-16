import Nav from "./components/Nav";
import Routing from "./utils/Routing";

function App() {
  return (
    <div className="w-full h-screen bg-zinc-900 text-white">
      <Nav />
      <Routing />
    </div>
  )
}

export default App;