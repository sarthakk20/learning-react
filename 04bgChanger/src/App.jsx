import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')

  return (
       <div className='w-full h-screen duration-200 text-white text-2xl'
       style={{backgroundColor: color}}
       >
          <div className='fixed flex flex-wrap justify-center inset-x-0 top-12 px-2 m-2'>
              <div className='flex flex-wrap justify-center px-3 py-2 gap-2 '>

                <button
                onClick={()=> setColor('Orange')}
                className='outline-none rounded-xl px-4 py-2 shadow-lg'
                >Orange</button>
                <button
                onClick={()=> setColor('Blue')}
                className='outline-none rounded-xl px-4 py-2 shadow-lg'
                >Blue</button>
                <button
                onClick={()=> setColor('Green')}
                className='outline-none rounded-xl px-4 py-2 shadow-lg'
                >Green</button>

              </div>
          </div>
       </div>
    
  )
}

export default App
