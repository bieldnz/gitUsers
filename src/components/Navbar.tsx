import React from 'react'
import Styles from "../styles/navbar.module.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <ul className={Styles.lista}>
            <li><Link to="/">GITHUB</Link></li>
            <li><Link to="/starwars">STAR WARS</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar