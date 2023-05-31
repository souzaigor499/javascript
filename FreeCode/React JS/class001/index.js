// import React from 'react'
// import ReactDOM from 'react-dom'
// ReactDOM.render(<p>ola mundo</p>, document.getElementById("root"))
// function MainContent(){ COMPOSABLE CUSTOM COMPONENTS
//     return (
//         <p>ola mundo</p>
//     )
// }

// ReactDOM.render(
//     <div>
        
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )
// const h1 = document.createElement("h1")
// const root = document.getElementById("root")

// h1.className = "header"
// h1.textContent = "ola mundo"

// root.appendChild(h1)

//JSX 

// const page = (
//     <div>
//         <h1 className = "header">ola mundo</h1>
//         <p>my name is</p>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))

// console.log(page)

const navbar = (
    <div>
        <nav>
            <h1>World Soccer</h1>
            <ul>
                <li>Europe</li>
                <li>America</li>
                <li>Other Leagues</li>
            </ul>
        </nav>
    </div>
)
ReactDOM.render(navbar, document.getElementById("root"))

