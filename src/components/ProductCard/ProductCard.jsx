import React from 'react'
import S from './ProductCard.module.css'

const ProductCard = ( { img, name, description, listPrice, salePrice, installment, value } ) => {
  return (
    <div className={S.containerCard}>
        <div className={S.containerImg}>
            <img src={img} alt="" />
        </div>
        <h4>{ name }</h4>
        <p>{ description }</p>
        <p>De: { listPrice }</p>
        <p>Por: { salePrice }</p>
        <p>ou { installment } x de { value }</p>
        <button type='button'>Comprar</button>
    </div>
  )
}

export default ProductCard