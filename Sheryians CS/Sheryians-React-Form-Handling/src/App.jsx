import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmitData = (data) => {
    setUsers([...users, data])
  }

  const handleRemove = (id) => {
    setUsers((previous) => previous.filter((item, index) => index != id))
  }

  return (
    <div className="w-full h-screen bg-zinc-800 flex justify-center items-center">
      <div className="container mx-auto">
        <Cards
          users={users}
          handleRemove={handleRemove}
        />

        <Form
          handleFormSubmitData={handleFormSubmitData}
        />
      </div>
    </div>
  )
}

export default App;