import { useEffect, useState } from 'react'
import './App.css'
import Article from './components/Article/Article'
import Header from './components/Header/Header'
import ProductCard from './components/ProductCard/ProductCard'

function App() {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1)

  async function handleRequest() {
    const response = await fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${page}`)

    const json = await response.json();
    setData([...data,...json.products])
    console.log(json);
  }

  const nextPage = () => {
    setPage(page+1)
  }

  useEffect(() => {
    handleRequest();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <Article />

      <main>
        {data.map((item) => {
          return (
            <ProductCard 
              key={item.id}
              img={item.image}
              name={item.name}
              description={item.description}
              listPrice={item.oldPrice}
              salePrice={item.price}
              installment={item.installments.count}
              value={item.installments.value}
            />
          )
        })}
        
      <button type='button' onClick={nextPage}>Ainda mais produtos aqui!</button>
      </main>
    </div>
  )
}

export default App
