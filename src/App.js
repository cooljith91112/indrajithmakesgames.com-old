import { useEffect, useState } from 'react';
import './App.css';
import GameLinks from './GameLinks/GameLinks';
import Layout from './Layout/Layout';

function App() {

  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetchGameData();
  },[]);

  const fetchGameData = async () => {
    try {
      const gameData = await fetch('./games.json').then(res=>res.json());
      console.log(gameData);
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
                <GameLinks gameData={game}></GameLinks>
                )}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;
