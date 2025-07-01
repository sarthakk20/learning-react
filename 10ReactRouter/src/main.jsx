import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Layout from '../src/Layout.jsx'    
import Home from './Component/Home/Home.jsx'
import About from './Component/About/About.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Github, { GitInfoLoader } from './Component/Github/Github.jsx'
import User from './Component/User/User.jsx'
import Example from './Component/Example/Example.jsx'

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     Children: [
//       {
//         path: "",
//         element : <Home/>
//       },
//       {
//         path: "about",
//         element : <About/>
//       },
//       {
//         path: "contact",
//         element : <Contact/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="about/" element={<About/>}/>
      {/* <Route path='example/:id'element={Example}/>
      </Route> */}
      <Route path="contact" element={<Contact/>}/>
      <Route path="user/:id" element={<User/>}/>
      <Route
      loader = {GitInfoLoader}
      path="github" 
      element={<Github/>}
      />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
