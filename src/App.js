import { useEffect, useState } from 'react';
import './App.css';
import GameLinks from './GameLinks/GameLinks';
import Layout from './Layout/Layout';
import MusicPlaying from './MusicPlaying/MusicPlaying';

function App() {

  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetchGameData();
  },[]);

  const fetchGameData = async () => {
    try {
      const gameData = await fetch('./games.json').then(res=>res.json());
      setGameList(gameData);
    } catch(error) {
      console.log("Failed to load Game List")
    }
  }

  return (
    <div className="container-fluid site-content">
      <Layout>
        <div className="row">
          <div className="col-12 game-list">
              {gameList && gameList.length > 0 && gameList.map( game => 
                <GameLinks gameData={game} key={game.id}></GameLinks>
                )}
          </div>
          <div className="col-12 game-list-end">
          &#8826;EOF&#8827;
          </div>
          <MusicPlaying></MusicPlaying>
        </div>
      </Layout>
    </div>
  );
}

export default App;
