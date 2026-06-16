import { useState } from 'react'
import './App.css'
import Entry from './components/Entry'
import Header from './components/Header'
import travelEntries from './assets/data'

function App() {
  
  const entryElements = travelEntries.map((entry)=>{
      return <Entry key={entry.id} img={entry.imageUrl} country={entry.location} des={entry.description}
      start={entry.startDate} end={entry.endDate} geo={entry.googleMapsUrl} title={entry.title}/>
  })

  return (
    <>
    <Header/>
    <main className='entry-container'>
      {entryElements}
    </main>
     
    </>
  )
}

export default App
