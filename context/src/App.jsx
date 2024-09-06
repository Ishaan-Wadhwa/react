import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import counterContext from './Context/contextfile'
import Button from './comp/Button'
import { Display } from './comp/comp1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <counterContext.Provider value={{count , setCount}}>
     <Button />
     <Display/>
     </counterContext.Provider>
  )
}

export default App
