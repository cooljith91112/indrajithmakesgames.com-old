import './GameLinks.css';

const GameLinks = (props) => {
    return (
        <div className="game-container" style={{ backgroundImage: `url(${props.gameData.image})`}}>
            <a className="game-link" href={props.gameData.link} >
                <div className="game-title-container">
                    <div className="game-title">
                    {props.gameData.title}
                    </div>
                </div>
            </a>
        </div>
    )
}

export default GameLinks;