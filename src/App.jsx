/* eslint-disable no-unused-vars */
import { useState } from 'react'
import explorer from './Data/Data'
import Folder from './component/Folder'

function App() {
  const [count, setCount] = useState(explorer)
  return (
   <>
   <Folder explorer={explorer}/>
   </>
  )
}

export default App
