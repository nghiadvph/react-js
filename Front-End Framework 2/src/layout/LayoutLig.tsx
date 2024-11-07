import { Outlet } from "react-router-dom"
import Header from "../conponent/Header"

const LayoutLig = () => {
  return (
    <>
    <Header />
    <Outlet/>
    </>
  )
}

export default LayoutLig