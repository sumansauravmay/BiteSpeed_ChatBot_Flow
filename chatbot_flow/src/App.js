import React from 'react'
import DnDFlow from './components/Flow'
import Savebutton from './components/Savebutton'

const App = () => {
  return (
    <div style={{height:"100vh"}}>
      {/* SaveButton Component */}
      <Savebutton/>
      {/* Drag and Drop Component */}
      <DnDFlow/>
    </div>
  )
}

export default App
