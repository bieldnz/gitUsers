import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Github from './components/github/Github'
import Pokemon from './components/pokemon/Pokemon'
import StarWars from './components/starWars/StarWars'

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children: [
      {
        path: "/",
        element: <Github/>
      },
      {
        path: "starwars",
        element: <StarWars/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
