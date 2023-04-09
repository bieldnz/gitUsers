import React from 'react'
import Styles from "../../styles/starwars.module.css"
import SearchStar from './SearchStar'
import LayoutStar from "./LayoutStar"
import foto from "https://upload.wikimedia.org/wikipedia/pt/c/cf/LukeTatooine.jpg"
import { useState, useEffect } from "react"
import { FilmsProps } from '../../types/star'

const StarWars = () => {

  const [films, setFilms] = useState<FilmsProps | null>(null)
  const [nameFilms, setNameFilms] = useState<string[]>([])

  let check = false
  let dataResult

  const searchFilms = async () => {
    const res = await fetch("https://swapi.dev/api/films/")
    const data = await res.json()
    return data.results
  }
  const searchCaracters = async (characters: string[]) => {
    const charactersResult = [await fetch(characters[0]), await fetch(characters[1]), await fetch(characters[2])]
    const charactersRes = [await charactersResult[0].json(), await charactersResult[1].json(), await charactersResult[2].json()]
    const characterRes2 = [charactersRes[0].name, charactersRes[1].name, charactersRes[2].name]
    return characterRes2
  }

  const starWars = async () => {
    dataResult = await searchFilms()
    const characters = await searchCaracters(dataResult[0].characters)
    let filmsResult: string[] = []
    dataResult.map((item: any) => {
      filmsResult.push(item.title)
    })
    const {title, episode_id, opening_crawl, director} = dataResult[0]
    const dataFilms:FilmsProps = {id: episode_id, title: title, sinopse: opening_crawl, director: director, characters: characters}
    if(check === false){
      setNameFilms(filmsResult)
      setFilms(dataFilms)   
      check = true 
    }
    console.log(films)
  }

  async function mostrar(name: string) {
    dataResult = await searchFilms()
    const dataFiltered = await dataResult.filter((item: any) => item.title === name)
    const characters = await searchCaracters(dataFiltered[0].characters)
    const {title, episode_id, opening_crawl, director} = dataFiltered[0]
    const dataFilms:FilmsProps = {id: episode_id, title: title, sinopse: opening_crawl, director: director, characters: characters}
    setFilms(dataFilms)
  }

  useEffect(() => {
    starWars()
  }, [])

  return (
    <div className={Styles.allStar}>
      <SearchStar nameFilms={nameFilms} mostrar={mostrar}/>
      <LayoutStar films={films}/>
      
    </div>
  )
}

export default StarWars