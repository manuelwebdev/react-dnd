import { useState, useEffect } from "react"

// styles
import "./SpellList.css"

// components
import SingleSpell from "./SingleSpell"

export default function SpellList({ url, data }) {
  const [showSpell, setShowSpell] = useState(false)
  const [spells, setSpells] = useState(null)
  const [scroll, setScroll] = useState(true)

  useEffect(() => {
    document.body.style.overflow = scroll ? "auto" : "hidden"
  }, [scroll])
  

  
  const handleClick = async (e) => {
    // console.log("event", e.target.dataset["endpoint"])
    try {
      const res = await fetch(`${url}${e.target.dataset.endpoint}`)
      const spells = await res.json()
      console.log("spells", spells)
      setScroll(false)
      setSpells(spells)
      setShowSpell(true)
      
      //   console.log("e", typeof e.target)
    } catch (error) {
      console.log("error", error)
    }
  }
  
  const handleShowSpell = (close) => {
    setScroll(true)
    setShowSpell(close)
  }
  
  return (
    <>
      {showSpell && <SingleSpell showSpell={handleShowSpell} spells={spells} />}
      <div className="SpellList">
        {data.results.map((spell) => (
          <div
            key={spell.index}
            className="spellCard"
            data-endpoint={spell.url}
            loading="lazy"
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
