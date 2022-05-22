import { useState, useEffect } from "react"

// styles
import "./SpellList.css"

// components
import SingleSpell from "./SingleSpell"

export default function SpellList({ url, data }) {
  const [showSpell, setShowSpell] = useState(false)
  const [spells, setSpells] = useState(null)
  const [scroll, setScroll] = useState(true)
  const [spellList, setSpellList] = useState([])
  const [query, setQuery] = useState("")
  console.log("spellList", spellList)
  useEffect(() => {
    document.body.style.overflow = scroll ? "auto" : "hidden"
  }, [scroll])

  useEffect(() => {
    setSpellList(
      data.results.filter((item) => item.name.toLowerCase().includes(query))
    )
  }, [query])

  const handleClick = async (e) => {
    // console.log("event", e.target.dataset["endpoint"])
    try {
      const res = await fetch(`${url}${e.target.dataset.endpoint}`)
      const spells = await res.json()
      console.log("spells", spells)
      setScroll(false)
      setSpells(spells)
      setShowSpell(true)
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleShowSpell = (close) => {
    setScroll(true)
    setShowSpell(close)
  }

  console.log(
    "filtered",
    data.results.filter((item) => item.name.toLowerCase().includes(query))
  )

  return (
    <>
      {showSpell && <SingleSpell showSpell={handleShowSpell} spells={spells} />}
      <div className="Search">
        <input
          className="searchInput"
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Spell"
        />
      </div>
      <div className="SpellList">
        {spellList &&
          spellList.map((spell) => (
            <div
              key={spell.index}
              className="spellCard"
              data-endpoint={spell.url}
            >
              <h2>{spell.name}</h2>
              <button
                id={spell.index}
                onClick={handleClick}
                className="spellBtn"
                data-endpoint={spell.url}
              >
                Get Spell Info
              </button>
            </div>
          ))}
      </div>
    </>
  )
}
