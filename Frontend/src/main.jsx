import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import BmiCalculator from './components/BmiCalculator/BmiCalculator.jsx'
import Hero from './components/Hero/Hero.jsx'
import AigenerateSug from './components/AigenerateSug/AigenerateSug.jsx'
import Userdasboard from './components/Userdasboard/Userdasboard.jsx'
// import BmiProvider from './components/BmiCalculator/BmiProvider.jsx'

// import { ClerkProvider } from '@clerk/clerk-react'
const router=createBrowserRouter([
{ 
  path:'/',
  element:<Layout/>,
  
 
    children:[
    {
      path:"/",
      element:<Hero/>,
    },
    {
    
     path:"Home",
     element:<Hero/>
   },
  {
    path:"CalculateBMI",
    element:<BmiCalculator/>
  }, 
  {
    path:"AIsuggestion",
    element:<AigenerateSug/>
  }, 
  {
    path:"UserDasboard",
    element:<Userdasboard/>
  }, 
]
}
])

// const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

// if (!PUBLISHABLE_KEY) {
//   throw new Error('Missing Publishable Key')
// }
createRoot(document.getElementById('root')).render(
  <StrictMode>
     {/* <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'> */}
   <RouterProvider router={router}/>
     {/* </ClerkProvider> */}
  </StrictMode>,
)
