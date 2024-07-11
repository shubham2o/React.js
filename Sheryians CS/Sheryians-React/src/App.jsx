import React from 'react';
import Card from "./Components/Card";
import Random from "./Components/Random";
import Nba from "./Components/Nba";
import { useState } from 'react';

const App = () => {
  const data = [
    {
      name: "Stephen Curry",
      position: "Point Guard",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
      friend: false,
    },
    {
      name: "Klay Thompson",
      position: "Shooting Guard",
      image: "https://www.mavs.com/wp-content/uploads/2024/07/klay_thompson.png",
      friend: false,
    },
    {
      name: "Kevin Durant",
      position: "Power Forward",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/201142.png",
      friend: false,
    },
    {
      name: "Draymond Green",
      position: "Forward-Center",
      image: "https://cdn.nba.com/headshots/nba/latest/1040x760/203110.png",
      friend: false,
    },
  ];

  const [realData, setRealData] = useState(data);

  const handleFriendButton = (cardIndex) => {
    setRealData(previous => {
      return previous.map((value, index) => {
        if (index === cardIndex) {
          return { ...value, friend: !value.friend }
        }
        return value;
      })
    })
  }

  return (
    <React.StrictMode>
      <div className="w-full h-full bg-zinc-700">
        <Card />
        <Random />
        <div className="w-full py-20 flex gap-4 justify-center align-center">
          {realData.map((item, index) => (
            <Nba
              key={index}
              values={item}
              handleClick={handleFriendButton}
              index={index}
            />
          ))}
        </div>
      </div>
    </React.StrictMode>
  )
}

export default App;