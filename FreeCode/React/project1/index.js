// import React from "react"
// import ReactDOM from "react-dom"
// import Header from "./Header"

function Header(){
    return (
        <header>
                <nav className="nav" alt="react-logo">
                    <img src="./React-icon.svg.png" className="react-logo"></img>
                   <ul className="nav-items">
                        <li>Princing</li>
                        <li>About</li>
                        <li>Contact</li>
                   </ul>
                </nav>
            </header>
    )
}

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

function App(){
    return (
        <div>
            <Header />
            
            <MainContent />

            <Footer />
        
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById("root"))