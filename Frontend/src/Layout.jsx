
import Navbar from './components/Navbar/Navbar'
import { Outlet} from 'react-router-dom'
import BmiProvider from './components/BmiCalculator/BmiProvider'
import {ToastContainer} from "react-toastify"

function Layout() {
  return (
    <>
      <BmiProvider>
      <Navbar />
      <Outlet />
      </BmiProvider>
    
      <ToastContainer/>

    </>

  )
}
export default Layout
