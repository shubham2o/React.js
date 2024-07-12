import React from 'react';
import Card from "./Components/Card";
import Random from "./Components/Random";
import Nba from "./Components/Nba";
import Navbar from "./Components/Navbar";
import Playlist from "./Components/Playlist";
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

  const playlistData = [
    {
      image: "https://i.scdn.co/image/ab67616d0000b2738431fb4cb38f8ee96d3434c0",
      song: "Coming Back to Life",
      artist: "Pink Floyd",
      added: false,
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b2733387bacdfd59f32e14dbe17a",
      song: "The Resistance",
      artist: "Skillet",
      added: false,
    },
    {
      image: "https://i.scdn.co/image/ab6761610000e5eb8f60f22324a81d3083e637a7",
      song: "Jee Veerey",
      artist: "Bloodywood",
      added: false,
    },
    {
      image: "https://i.scdn.co/image/ab67616d00001e029d62fac089698961eab30227",
      song: "The Summoning",
      artist: "Sleep Token",
      added: false,
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273af73dbd85860caf8165831a5",
      song: "Unfurl",
      artist: "Katatonia",
      added: false,
    },
    {
      image: "https://i.scdn.co/image/ab67616d0000b273a321569060a092911aba91f9",
      song: "Death, Come Near Me",
      artist: "Draconian",
      added: false,
    },
  ];

  const [realPlaylistData, setRealPlaylistData] = useState(playlistData);

  return (
    <React.StrictMode>
      <div className="w-full h-full bg-zinc-700">
        <Card />

        <Random />

        <div className="w-full py-20 flex gap-10 justify-center align-center border-y-2 border-dotted border-zinc-600">
          {realData.map((item, index) => (
            <Nba
              key={index}
              values={item}
              handleClick={handleFriendButton}
              index={index}
            />
          ))}
        </div>

        <div className="w-full py-20 border-b-2 border-dotted border-zinc-600 tracking-wide">
          <Navbar />

          <div className="px-12 py-8 flex flex-wrap gap-10">
            {realPlaylistData.map((item, index) => (
              <Playlist
                key={index}
                values={item}
              />
            ))}
          </div>
        </div>
      </div>
    </React.StrictMode>
  )
}

export default App;