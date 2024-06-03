import { Outlet } from "react-router-dom"
import Banner from "../components/Banner"

const Home = () => {
  return (
    <div>
      <Banner/>
      <Outlet/>
    </div>
  )
}

export default Home
