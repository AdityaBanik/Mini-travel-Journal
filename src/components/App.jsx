import Header from "./Header"
import data from '../data.js'
import Card from "./Card"

function App(){

  const cards= data.map(item=> <Card data={item}/>)

  return (
    <>
      <Header/>
      <main className="container">
        {cards}
      </main>
      
    </>
  )
}
export default App









