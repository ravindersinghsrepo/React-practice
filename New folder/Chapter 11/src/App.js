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
import { useEffect, useState } from "react"
import { lazy, Suspense, useState } from "react"
import { userContext } from "./util/userContext";

const Grocery = lazy(()=>import("./components/Grocery")); 

const AppLayout = ()=>{
  const [userName , setUserName] = useState();
  // Authentication
  useEffect(()=>{
    const data = {
      userName : 'Ravi'
    }
    setUserName(data.userName);
  },[]) 

  return(
    <div className="app">
    <userContext.Provider value={{userloggedIn:userName}}>
    <Header/>
    </userContext.Provider>
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




