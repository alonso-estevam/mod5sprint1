import React from 'react'

const ProductCard = ( { name, description, listPrice, salePrice, installment } ) => {
  return (
    <div>
        <div>
            <img src="" alt="" />
        </div>
        <h4>{ name }</h4>
        <p>{ description }</p>
        <p>{ listPrice }</p>
        <p>{ salePrice }</p>
        <p>{ installment }</p>
        <button type='button'>Comprar</button>
    </div>
  )
}

export default ProductCard