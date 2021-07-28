import { useRef } from 'react';
import './GameLinks.css';

const GameLinks = (props) => {

    const gameDetailsContainer = useRef(null);

    const revealDetails = () => {
        const gameDetails = gameDetailsContainer.current;
        if (gameDetails.style.maxHeight) {
            gameDetails.style.maxHeight = "";
        } else {
            gameDetails.style.maxHeight = `${gameDetails.scrollHeight}px`;
        }
    };

    return (
        <div className="game-container" >
            <div className="game-bg" style={{ backgroundImage: `url(${props.gameData.image})` }} onClick={revealDetails}>
                <div className="game-title-container">
                    <div className="game-title">
                        {props.gameData.title}
                    </div>
                </div>
            </div>
            <div className="game-details" ref={gameDetailsContainer}>
                <div className="game-description">{props.gameData.description}</div>
                <div className="game-release-details">
                    <span className="game-year">
                        <span className="label">Year: </span>
                        <span className="text">{props.gameData.releaseDate}</span>
                    </span>
                    <span className="game-link">
                        <span className="label">Link: </span>
                        <a className="text game-links link" href={props.gameData.link} target="_blank">
                            {props.gameData.linkTitle}
                            <div className="hover-text">Play this game</div>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default GameLinks;