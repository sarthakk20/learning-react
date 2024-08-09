import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import New from './new.jsx'

function MyApp(){
  return (
    <h1>sarthak</h1>
  );
}

// const ReactElement = {
//   type: "a",
//   props:{
//       href: "https://google.com",
//       target: "_blank"
//   },
//   children: "Click to visit Google",
// }

const anotherVariable = " Sarthak";

const Element = React.createElement(
  'a', //tag name/type
  {href:"https//:google.com", target:"blank"}, //objet/key
  "Google", //text/ref
  // anotherVariable //variable/props
)


ReactDOM.createRoot(document.getElementById('root')).render(

    Element
  

)
