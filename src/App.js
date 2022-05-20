import { useState, useRef } from "react"
import { useFetch } from "./hooks/useFetch"

// styles
import "./reset.css"
import "./App.css"
import SpellList from "./components/SpellList"

// components
// import SpellList from './components/SpellList';

const url = "https://www.dnd5eapi.co"

function App() {
  const [spellsUrl, setSpellsUrl] = useState(`${url}/api/spells`)
  const { error, isPending, data } = useFetch(spellsUrl)
  // const [scrollDisable, setScrollDisable] = useState(false)

  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="pending">Loading...</p>}
      
      {data && <SpellList url={url} data={data} />}
    </div>
  )
}

export default App
