import { useState } from "react"
import { useFetch } from "./hooks/useFetch"

// styles
import "./App.css"

// components
// import SpellList from './components/SpellList';

function App() {
  const [url, setUrl] = useState(`https://www.dnd5eapi.co`)

  let { error, isPending, data } = useFetch(`${url}/api/spells`)

  const handleClick = (e) => {
    console.log(e.target.attributes[0].value)
    fetchSpell(e.target.attributes[0].value)
  }

  const fetchSpell = async (spell) => {
    // defining our function and making it asynchronous

    const res = await fetch(`${url}/api/spells/${spell}`) // awaiting the response from the api
    const data = await res.json() // awaiting the data and converting response to JSON
    console.log("spell", data)

    displaySpell(data)
  }

  const displaySpell = (spellData) => {
    let app = document.querySelector(".spellCards")

    let spellTemplate = (
      <div className="spellInfo">
        <h2>{spellData.name}</h2>
        <p>range: {spellData.range}</p>
      </div>
    )
    return app += spellTemplate
    
  }

  console.log("data", data, typeof document.querySelector(".App"))
  return (
    <div className="App">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data &&
        data.results.map((spell) => (
          <div key={spell.index} className="spellCards">
            <h2 id={spell.index} key={spell.index} onClick={handleClick}>
              {spell.name}
            </h2>
          </div>
        ))}
    </div>
  )
}

export default App
