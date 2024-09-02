import Header from "./components/Header"
import Body from "./components/Body"
import ReactDOM from 'react-dom/client'

const AppLayout = ()=>{
  return(
    <div className="app">
    <Header/>
    <Body/>
    </div>
  )
}

const rootElem = ReactDOM.createRoot(document.getElementById('root')) ; 

rootElem.render(<AppLayout/>)




