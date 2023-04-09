import React, { useState } from 'react'
import Styles from '../../styles/github/github.module.css'
import Perfil from "../../assets/perfil.jpeg"
import Search from "./SearchGit"
import { UserProps } from "../../types/user"

const Github = () => {

  const [foto, setFoto] = useState<string>(Perfil)
  const [user, setUser] = useState<UserProps | null | undefined>(null)
  const [show, setShow] = useState<string>(`${Styles.boxDirGit}`)

  const loadUser = async (user: string) => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    if (res.status == 404) {
      alert("USUÁRIO NÃO ENCONTRADO")
      setShow(`${Styles.boxDirGit}`)
      setFoto(Perfil)
    }else {
      const data = await res.json()
      console.log(data)
      const { login, avatar_url, followers, following, html_url } = data
      const dataUser: UserProps = { name: login, avatar: avatar_url, link: html_url, followers: followers, following: following }
      setUser(dataUser)
      setFoto(dataUser.avatar)
      setShow(`${Styles.boxDirGit} ${Styles.mostrar}`)
    }
  }

  return (
    <div className={Styles.allGit}>
      <div className={Styles.esqGit}>
        <div className={Styles.boxEsqGit}>
          <div className={Styles.boxEsqGitInside}>
            <h1>BUSQUE UM USUÁRIO</h1>
            <img src={foto} />
            <Search loadUser={loadUser} />
          </div>
        </div>
      </div>
      <div className={Styles.dirGit}>
        <div className={show}>
          <ul>
            <li>Nome: {user && user.name}</li>
            <li>Seguidores: {user && user.followers}</li>
            <li>Seguindo: {user && user.following}</li>
            <li><a href={user?.link && user.link} target="_blank">Ver Perfil</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Github