import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from 'react/jsx-dev-runtime.js'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}


// const ReactElement = {
//     type: 'a', 
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }


const anotherElement = (
    <a href=" https://yahoo.com, " target='_blank'>Visit yahoo</a>
)



const anotherUser = " chai aur react, "

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google, ', 
    <br/>,
    anotherUser,
    <br/>,
    anotherElement
)



createRoot(document.getElementById('root')).render(
  
    reactElement 

  
)
