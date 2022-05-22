import { useState } from "react"

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="SearchWrap">
      <div className="Search">
        <input type="search" onChange={(e) => setSearchTerm(e.target.value)} />
        {searchTerm && <p>{searchTerm}</p>}
      </div>
    </div>
  )
}
