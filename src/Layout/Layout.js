import Sidebar from "../Sidebar/Sidebar"

const Layout = ({ pageTitle, children }) => {
    return (
        <main className="row">
            <div className="col-4">
                <Sidebar></Sidebar>
            </div>
            <div className="col-8">{children}</div>
        </main>
    )
}

export default Layout;