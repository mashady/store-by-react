import { Outlet } from "react-router-dom"
import Navbar from "../Navbar"
import Footer from "../Footer"
import GoToTop from "../GoToTop"

export default function Layout() {
  return (
    <>
      <GoToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
