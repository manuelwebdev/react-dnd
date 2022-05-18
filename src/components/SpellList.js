import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

export default function SpellList() {
  const url = `https://www.dnd5eapi.co/api/spells`
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }, [url])

  return (<div className="spellList">

  </div>)
}
