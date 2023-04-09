import React from 'react'
import Styles from "../../styles/github/github.module.css"
import { AiOutlineSearch } from 'react-icons/ai'
import {useState, KeyboardEvent} from "react"

type SearchProps = {
  loadUser(user:String):Promise<void>
}

const SearchGit = ({loadUser}:SearchProps) => {

  const [userName, setUserName] = useState("")
  
  const handleKeyDOwn = (e: KeyboardEvent) => {
    if(e.key === "Enter"){
      loadUser(userName)
    }
  }

  return (
    <div className={Styles.boxInput}>
      <input type="text" onChange={(e) => {setUserName(e.target.value)}} onKeyDown={handleKeyDOwn}/>
      <button onClick={() => {loadUser(userName)}}><AiOutlineSearch/></button>
    </div>
  )
}

export default SearchGit