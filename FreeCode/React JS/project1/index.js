import Header from "./Header"

function Footer(){
    return (
        <footer className="footer">
            <small>All rights reserved</small>
        </footer>
    )
}

function MainContent(){
    return (
        <div className="content">
            <h1>Fun facts about react</h1>
                <ul className="un-list">
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
               
            </ul>
        </div>
    )
}

function PageRender(){
    return (
        <div>
            <Header />
            
            <MainContent />

            <Footer />
        
        </div>
    )
}
ReactDOM.render(<PageRender />, document.getElementById("root"))