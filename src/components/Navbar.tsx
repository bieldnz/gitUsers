import React from 'react'
import Styles from "../styles/navbar.module.css"

const Navbar = () => {
  return (
    <nav>
        <ul className={Styles.lista}>
            <li><a href='http://127.0.0.1:5173/'>GITHUB</a></li>
            <li><a href='http://127.0.0.1:5173/starwars'>STAR WARS</a></li>
        </ul>
    </nav>
  )
}

export default Navbar