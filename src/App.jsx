import { useState } from 'react'
import './App.css'
import Article from './components/Article/Article'
import Header from './components/Header/Header'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Article />

      <main>
        <ProductCard name="Nome do produto 1" description="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata." listPrice="De: R$ 23,99" salePrice="Por: R$ 19,99" installment="ou 2x de R$ 9,99"/>

        <ProductCard name="Nome do produto 2" description="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata." listPrice="De: R$ 23,99" salePrice="Por: R$ 19,99" installment="ou 2x de R$ 9,99"/>

        <ProductCard name="Nome do produto 3" description="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata." listPrice="De: R$ 23,99" salePrice="Por: R$ 19,99" installment="ou 2x de R$ 9,99"/>

        <ProductCard name="Nome do produto 4" description="Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata." listPrice="De: R$ 23,99" salePrice="Por: R$ 19,99" installment="ou 2x de R$ 9,99"/>
      </main>
    </div>
  )
}

export default App
