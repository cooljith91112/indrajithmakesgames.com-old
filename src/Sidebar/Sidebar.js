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
                <div className="name-title">
                    <div>Indrajith K L</div>
                    <div>Indie Game Developer</div>
                </div>
                <div className="bio">
                    I'm an hobbyist Indie Game Developer. I started making games when I was 20 years old and now I'm entering middle age. Made many prototypes but never released any.
                    This website exist as an intiative to develop games every month, heavily inspired by 1GAM. I will post links and info about my games here.
                </div>
                <div className="tools">
                    I love to make games using either HaxeFlixel (still loves the old Flixel) or Game Maker Studio but also a fan of LÖVE 2D.
                    For graphics I use Aseprite & Promotion NG.
                </div>
                <ul className="links">
                    <li className="link-title">My Other websites and links</li>
                    <li><a href="https://thingsofinternet.org/">Things of Internet</a></li>
                    <li><a href="https://experimentsofindrajith.in/">Experiments of Indrajith</a></li>
                    <li><a href="https://indrajithkl.itch.io/">Itch.io</a></li>
                    <li><a href="https://twitter.com/indrajithKLIS">Twitter</a></li>
                    <li><a href="https://github.com/cooljith91112">Github</a></li>
                </ul>
                <footer>
                    Design & Development by Indrajith K L
                </footer>
            </div>
        </div>
    );
}

export default Sidebar;