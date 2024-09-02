import Header from "./components/Header"
import Body from "./components/Body"
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from "react-router-dom"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import { RouterProvider } from "react-router-dom" ; 
import Error from './components/Error';
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu"

import { lazy, Suspense } from "react"

const Grocery = lazy(()=>import("./components/Grocery")); 
const AppLayout = ()=>{
  return(
    <div className="app">
    <Header/>
    <Outlet/>
    </div>
  )
}


const browserRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout/>,
    children:[
    {
      path:'/',
      element:<Body/>
    } ,
    {
      path : '/about' , 
      element :<AboutUs/>
    } , 
    {
      path:'/contact',
      element : <Contact/>
    } , 
    {
      path:'/grocery',
      element : <Suspense fallback={<h1>Loading ...</h1>}>
        <Grocery/>
      </Suspense>
    } , 
    {
      path:'/restaurant/:id',
      element : <RestaurantMenu/>
    } ,   
  ] 
  } 
  
])



const rootElem = ReactDOM.createRoot(document.getElementById('root')) ; 

rootElem.render(<RouterProvider router={browserRouter}/>)




