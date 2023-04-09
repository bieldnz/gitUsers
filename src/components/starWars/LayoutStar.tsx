import React from 'react'
import Styles from "../../styles/starwars.module.css"
import { useState } from 'react'
import { FilmsProps } from '../../types/star'
type Props = {
  films: FilmsProps | null
}

const LayoutStar = ({ films }: Props) => {

  let personagens: string[] = []

  if (films?.characters.length !== undefined) {
    for (let x = 0; x < films?.characters.length; x++) {
      if (x !== 2) {
        personagens.push(`${films.characters[x]}, `)
      } else { personagens.push(films.characters[x]) }
    }
  }

  const [name, setName] = useState("asdfas")
  const fotos: string[] = ["https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    "https://resizing.flixster.com/LZOT2cMVVsG2MmXJTLpAtD1Ja2M=/206x305/v2/https://flxt.tmsimg.com/assets/p28914_p_v8_ah.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/5/58/Star_Wars_Epis%C3%B3dio_III_A_Vingan%C3%A7a_dos_Sith.jpg",
    "https://m.media-amazon.com/images/I/81aA7hEEykL.jpg",
    "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91H37HUG4kL._RI_.jpg"]

  return (
    <div className={Styles.starContent}>
      <section>
        <img src={films ? fotos[films.id - 1] : ""} />
        <div>
          <div className={Styles.dataContent}>
            {films && <p>Título: {films.title}</p>}
            {films && <p>Personagens: {films && personagens}</p>}
            {films && <p>Diretor: {films && films.director}</p>}
          </div>
          <div className={Styles.sinopse}>
            <h2>SINOPSE</h2>
            <p>{films && films.sinopse}</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LayoutStar