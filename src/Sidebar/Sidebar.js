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
                                <a href="https://haxeflixel.com/">HaxeFlixel</a>
                            </li>
                            <li>
                                <a href="https://yoyogames.com/">Game Maker Studio</a>
                            </li>
                            <li>
                                <a href="https://www.aseprite.org/">Aseprite</a>
                            </li>
                            <li>
                                <a href="https://www.cosmigo.com/">Promotion NG</a>
                            </li>
                            <li>
                                <a href="https://pyxeledit.com/">Pyxel Edit</a>
                            </li>
                            <li>
                                <a href="https://www.mapeditor.org/">Tiled</a>
                            </li>
                            <li>
                                <a href="https://ogmo-editor-3.github.io/">Ogmo Editor 3</a>
                            </li>
                            <li>
                                <a href="https://www.lexaloffle.com/pico-8.php">Pico 8</a>
                            </li>
                            <li>
                                <a href="https://www.appgamekit.com/">AGK Classic</a>
                            </li>
                            <li>
                                <a href="https://www.clickteam.com/clickteam-fusion-2-5">Clickteam Fusion</a>
                            </li>
                            <li>
                                <a href="https://www.gbstudio.dev/">GB Studio</a>
                            </li>
                            <li>
                                <a href="https://www.solarus-games.org/">Solarus</a>
                            </li>
                        </ul>
                    </details>
                </div>
                <ul className="links">
                    <li className="link-title">My Other websites and links</li>
                    <li><a href="https://thingsofinternet.org/">Things of Internet</a></li>
                    <li><a href="https://experimentsofindrajith.in/">Experiments of Indrajith</a></li>
                    <li><a href="https://indrajithkl.itch.io/">Itch.io</a></li>
                    <li><a href="https://twitter.com/indrajithKLIS">Twitter</a></li>
                    <li><a href="https://github.com/cooljith91112">Github</a></li>
                    <li><a href="mailto:indrajith@indrajithmakesgames.com">Mail Me</a></li>
                </ul>
                <footer>
                &#8826; 2021 Indrajith K L &#8827;
                </footer>
            </div>
        </div>
    );
}

export default Sidebar;