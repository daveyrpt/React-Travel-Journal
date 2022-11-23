import { useState } from 'react'

import Nav from './components/Nav'
import Card from './components/Card'

import Data from './data'

function App() {
  const importData = Data.map ( data => {
    return <Card  
        title = {data.title}
        location = {data.location}
        url = {data.googleMapsUrl}
        start = {data.startDate}
        end = {data.endDate}
        desc = {data.description}
        image = {data.imageUrl}
    />
  })

  return (
    <div className="App">
      <Nav />
      {importData}
    </div>
  )
}

export default App
