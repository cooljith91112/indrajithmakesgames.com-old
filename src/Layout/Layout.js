import './Layout.css';
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({ pageTitle, children }) => {
    return (
        <main className="row">
            <div className="col-4 sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className="col-8 main-content">{children}</div>
        </main>
    )
}

export default Layout;