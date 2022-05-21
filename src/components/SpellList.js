import { useState } from "react"

// styles
import "./SpellList.css"

// components
import SingleSpell from "./SingleSpell"

export default function SpellList({ url, data }) {
  const [showSpell, setShowSpell] = useState(false)
  const [spells, setSpells] = useState(null)
  // Spell Info
//   const [areaEffect, setAreaEffect] = useState(null)
//   const [attackType, setAttackType] = useState("")
//   const [castTime, setCastTime] = useState("")
//   const [classes, setClasses] = useState([])
//   const [components, setComponents] = useState([])
//   const [concentration, setConcentration] = useState(false)
//   const [damageType, setDamageType] = useState("")
//   const [damageHigher, setDamageHigher] = useState([])
//   const [desc, setDesc] = useState([])
//   const [descHigher, setDescHigher] = useState("")
//   const [duration, setDuration] = useState("")
//   const [level, setLevel] = useState("")
//   const [material, setMaterial] = useState("")
//   const [name, setName] = useState("")
//   const [range, setRange] = useState("")
//   const [ritual, setRitual] = useState(false)
//   const [school, setSchool] = useState({})
//   const [subclass, setSubclass] = useState([])

  const handleClick = async (e) => {
    // console.log("event", e.target.dataset["endpoint"])
    try {
      const res = await fetch(`${url}${e.target.dataset.endpoint}`)
      const spells = await res.json()
      console.log("spells", spells)
      setSpells(spells)
      setShowSpell(true)

    //   console.log("e", typeof e.target)
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleClose = () => setShowSpell(false)

  return (
    <>
      {showSpell && <SingleSpell showSpell={showSpell} spells={spells} />}
      {/* {showSpell && (
        <div className="spellInfo">
          <div className="infoCol">
            {attackType || ritual || concentration ? (
              <div className="atkRitCon">
                <div className="stackWrap attack">
                  <h4>Attack</h4>
                  <p>{attackType}</p>
                </div>
                <div className="stackWrap ritual">
                  <h4>Ritual</h4>
                  <p>{ritual}</p>
                </div>
                <div className="stackWrap concentration">
                  <h4>Concentration</h4>
                  <p>{concentration}</p>
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="mainSpellInfo">
              <div className="stackWrap casting">
                <h4>Casting Time</h4>
                <p>{castTime}</p>
              </div>
              <div className="stackWrap duration">
                <h4>Duration</h4>
                <p>{duration}</p>
              </div>
              <div className="stackWrap range">
                <h4>Range/Area</h4>
                <p>
                  {range}
                  {areaEffect}
                </p>
              </div>
              <div className="stackWrap components">
                <h4>Components</h4>
                <p>{components}</p>
              </div>
              <div className="stackWrap material">
                <h4>Material</h4>
                <p>{material}</p>
              </div>
              {damageType || damageHigher ? (
                <div className="stackWrap damage">
                  <h4>Damage ({damageType ? damageType : "healing"})</h4>
                  <div className="levels">
                    {damageHigher.map((item) => (
                      <div key={item[0]} className="levelStack">
                        <h5>Slot lvl: {item[0]}</h5>
                        <p>
                          {item[1]} {damageType}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                ""
              )}
              <div className="stackWrap description">
                <h4>Description</h4>
                <p>{desc}</p>
              </div>
              {descHigher ? (
                <div className="stackWrap descHigher">
                  <h4>At Higher Levels</h4>
                  <p>{descHigher}</p>
                </div>
              ) : (
                ""
              )}
              <div className="stackWrap classes">
                <h4>Classes</h4>
                <p>{classes}</p>
              </div>
              <div className="stackWrap subclass">
                <h4>Subclasses</h4>
                <p>{subclass}</p>
              </div>
            </div>
          </div>
          <div className="spellCol">
            <span className="level">{level}</span>
            <h2 className="spellName">{name}</h2>
            <div onClick={handleClose} className="close">
              X
            </div>
          </div>
        </div>
      )} */}
      <div className="SpellList">
        {data.results.map((spell) => (
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
