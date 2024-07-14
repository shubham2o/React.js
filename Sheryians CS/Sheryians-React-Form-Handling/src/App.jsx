import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-center items-center">
      <div className="container mx-auto">
        <Cards />
        <Form />
      </div>
    </div>
  )
}

export default App;