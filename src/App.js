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

  // Spell Info
  const [showSpell, setShowSpell] = useState(false)
  const [name, setName] = useState('')
  const [areaEffect, setAreaEffect] = useState({})
  const [castTime, setCastTime] = useState('')
  const [classes, setClasses] = useState([])
  const [components, setComponents] = useState([])
  const [concentration, setConcentration] = useState(false)
  const [desc, setDesc] = useState([])
  const [duration, setDuration] = useState('')
  const [higherLevel, setHigherLevel] = useState([])
  const [level, setLevel] = useState('')
  const [material, setMaterial] = useState('')
  const [range, setRange] = useState('')
  const [ritual, setRitual] = useState(false)
  const [school, setSchool] = useState({})
  const [subclass, setSubclass] = useState([])

  const handleClick = async (e) => {
    console.log('event', e.target.dataset["endpoint"])
    try {
      const res = await fetch(`${url}${e.target.dataset.endpoint}`)
      const spells = await res.json()

      setShowSpell(true)
      setName(spells.name)
      setCastTime(spells.casting_time)     

    console.log('e', typeof e.target);
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="App" >
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      {showSpell && (
        <div className="spellInfo">
          <h2>{name}</h2>
          <p>{castTime}</p>
          {/* <p>{areaEffect}</p>
          <p>{duration}</p>
          <p>{level}</p>
          <p>{range}</p>
          <p>{material}</p> */}
        </div>
      )}
      {data && data.results.map((spell) => (
        <div key={spell.index} className="spellCard" data-endpoint={spell.url}>
          <h2>{spell.name}</h2>
          <button id={spell.index} onClick={handleClick} className="spellBtn" data-endpoint={spell.url}>Get Spell Info</button>
        </div>
      ))}
    </div>
  )
}

export default App
