import './App.css'
import User from './Components/user'
import Product from './Components/productprice'
import Profile from './Components/PassingObjectInprops'

function App() {

  return (
    <>
    <h1>Devil</h1>
    <User name="Priyanshu" Email="Admin" age = {34} />
    <User name="Devil" Email="Developer" age = {66}/>

    <h1><Product name={"Coffe Mug"} price={99} instock={true} /></h1>

    </>
  )
}

export default App
