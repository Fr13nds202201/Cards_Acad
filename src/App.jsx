
import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {
  const RandomElementFromArray = arr => {

   const indexRandom = (Math.floor((Math.random() * arr.length)))
   return arr[indexRandom]
  } 

  const [quoteRandom, setQuoteRandom] = useState(RandomElementFromArray(quotes))
  const [colorRandom, setcolorRandom] = useState(RandomElementFromArray(colors))

  const handleClick = () => {
    setQuoteRandom(RandomElementFromArray(quotes))
    setcolorRandom(RandomElementFromArray(colors))
  }

  return (
    <div style={{backgroundColor:colorRandom}} className="App">
      <QuoteBox 
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom} />
    </div>
  )
}

export default App
