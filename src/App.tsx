import Navbar from "./components/Navbar"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <div style={{height: "calc(100vh - 136px)"}}>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
