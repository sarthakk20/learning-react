import { useEffect, useState } from 'react'
import './App.css'
import CompA from './Components/CompA'
import InputFocus from './Components/UseRef'
import StopWatch from './Components/StopWatch'
import ThemeButton from './Components/ThemeButton'
import { ThemeProvider } from './Components/ThemeProvider'
import Card from './Components/Card'

// import { ThemeProvider } from './ThemeContext';
// import ThemeButton from './ThemeButton';

// function App() {
//   return (
//     <ThemeProvider>
//       <h1>Hello Theme!</h1>
//       <ThemeButton />
//     </ThemeProvider>
//   );
// }



// useContext is the solution on prop drilling.

// provider Component
// 1. import {createContext} from 'react'
// 2. export const MyContext = createContext(); - outside the component
// 3.<MyContext.Provider value={value} >
//      <child/>
// </MyContext.Provider>

// consumer Component
// 1. import React,{useContext} from 'react'
//    import MyContext from './CompA'
// 2. const value = useContext(MyContext) - inside the component

function App() {
  const [themeMode , setThemeMode] = useState('light')

  const darkMode = ()=>{
    setThemeMode('dark')
  }
  const lightMode = ()=>{
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
    <h1 class='text-center text-3xl font-serif'>Hello, Sarthak</h1>
    {/* <CompA/>
    <InputFocus/>
    <StopWatch/> */}
    <ThemeButton/>
    <Card/>
    </ThemeProvider>
  )
}

export default App
