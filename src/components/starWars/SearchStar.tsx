import React from 'react'
import Form from 'react-bootstrap/Form';
import Styles from "../../styles/starwars.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';4
type SearchProps = {
  nameFilms: string[],
  mostrar: (name: string) => void
}

const SearchStar = ({nameFilms, mostrar}: SearchProps) => {

  let optionList = []

  for(let x = 0; x <= nameFilms.length; x++){
    if(nameFilms[x] !== undefined){
      optionList.push(<option key={x}>{nameFilms[x]}</option>)
      
    }
  }

  return (
    <div>
      <Form.Select size="lg" onChange={(e) => mostrar(e.target.value)}>
        {nameFilms.length > 0 ? (
          optionList
        ):(
          <option>Carregando</option>
        )}
      </Form.Select>
    </div>
  )
}

export default SearchStar