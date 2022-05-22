import { useState } from "react"

// styles
import './Navbar.css'

// components
import Search from "./Search"

export default function Navbar() {
  return (
    <div className="navbarWrap">
        <div className="navbar">
            <h1>React D&D</h1>
            <Search />
        </div>
    </div>
  )
}
