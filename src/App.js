import { useState, useRef } from "react"
import { useFetch } from "./hooks/useFetch"

// styles
import "./App.css"

// components
// import SpellList from './components/SpellList';

const url = 'https://www.dnd5eapi.co'

function App() {
  const [spellsUrl, setSpellsUrl] = useState(`${url}/api/spells`)
  const { error, isPending, data } = useFetch(spellsUrl)
  const App = useRef()

  const handleClick = async (e) => {
    console.log('event', e.target.dataset["endpoint"])
    try {
    const res = await fetch(`${url}${e.target.dataset.endpoint}`)
    const spells = await res.json()
  
    console.log('app', App);
    console.log('spells', spells)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="App" ref={App}>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      {data && data.results.map((spell) => (
        <div key={spell.index} className="spellCard" data-endpoint={spell.url}>
          <h2>{spell.name}</h2>
          <button onClick={handleClick} className="spellBtn" data-endpoint={spell.url}>Get Spell Info</button>
        </div>
      ))}
    </div>
  )
}

export default App
