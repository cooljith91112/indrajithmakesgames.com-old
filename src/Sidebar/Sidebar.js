import './Sidebar.css';

const Sidebar = (props) => {
    return (
        <div className="row sidebar-content">
            <div className="col-12">
                <div className="logo-container">
                    <img src="/logo.png" alt="logo"/>
                </div>
                <h1 className="title">
                    <span className="I">Indrajith</span>
                    <span className="M"> Makes</span>
                    <span className="G"> Games</span>
                </h1>
            </div>
            <div className="col-12 sidebar-info">
                <div className="bio">
                    Hi my name is Indrajith K L, I'm an hobbyist Indie Game Developer. I started making games when I was 20 years old and now I'm entering middle age. Made many prototypes but never released any.
                    This website exist as an intiative to develop games every month, heavily inspired by 1GAM. I will post links and info about my games here.
                </div>
                <div className="tools">
                    I love to make games using either HaxeFlixel (still loves the old Flixel) or Game Maker Studio but also a fan of LÖVE 2D.
                    For graphics I use Aseprite & Promotion NG. Below is a list of tools I use frequently.
                    <details>
                        <summary>Tools & Game engines</summary>
                        <ul>
                            <li>
                                <a target="_blank" href="https://haxeflixel.com/" rel="noreferrer">HaxeFlixel</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://yoyogames.com/" rel="noreferrer">Game Maker Studio</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.aseprite.org/" rel="noreferrer">Aseprite</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.cosmigo.com/" rel="noreferrer">Promotion NG</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://pyxeledit.com/" rel="noreferrer">Pyxel Edit</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.mapeditor.org/" rel="noreferrer">Tiled</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://ogmo-editor-3.github.io/" rel="noreferrer">Ogmo Editor 3</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.lexaloffle.com/pico-8.php" rel="noreferrer">Pico 8</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.appgamekit.com/" rel="noreferrer">AGK Classic</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.clickteam.com/clickteam-fusion-2-5" rel="noreferrer">Clickteam Fusion</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.gbstudio.dev/" rel="noreferrer">GB Studio</a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.solarus-games.org/" rel="noreferrer">Solarus</a>
                            </li>
                        </ul>
                    </details>
                </div>
                <ul className="links">
                    <li className="link-title">My Other websites and links</li>
                    <li><a target="_blank" href="https://thingsofinternet.org/" rel="noreferrer">Things of Internet</a></li>
                    <li><a target="_blank" href="https://experimentsofindrajith.in/" rel="noreferrer">Experiments of Indrajith</a></li>
                    <li><a target="_blank" href="https://indrajithkl.itch.io/" rel="noreferrer">Itch.io</a></li>
                    <li><a target="_blank" href="https://twitter.com/indrajithKLIS" rel="noreferrer">Twitter</a></li>
                    <li><a target="_blank" href="https://github.com/cooljith91112" rel="noreferrer">Github</a></li>
                    <li><a href="mailto:indrajith@indrajithmakesgames.com" rel="noreferrer">Mail Me</a></li>
                </ul>
                <footer>
                &#8826; 2021 Indrajith K L &#8827;
                </footer>
            </div>
        </div>
    );
}

export default Sidebar;