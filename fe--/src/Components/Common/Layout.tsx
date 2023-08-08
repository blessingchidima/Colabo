import { Outlet } from "react-router-dom"
import HomeScreen from "../../pages/HomeScreen"


const Layout = () => {
  return (
    <div>
        <HomeScreen/>
        <Outlet/>
    </div>
  )
}

export default Layout