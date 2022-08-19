import { useState } from 'react'
import './App.css'
import Article from './components/Article/Article'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Article />
    </div>
  )
}

export default App
