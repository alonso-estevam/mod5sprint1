import React from 'react'
import S from './ProductCard.module.css'

const ProductCard = ( { name, description, listPrice, salePrice, installment } ) => {
  return (
    <div className={S.containerCard}>
        <div className={S.containerImg}>
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