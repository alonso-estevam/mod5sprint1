import React from 'react'
import MenuItem from '../MenuItem/MenuItem'

const Header = () => {
  return (
    <div>
        <h3>uma seleção de produtos</h3>
        <h1>especial para você</h1>
        <h2>Todos os produtos dessa lista foram selecionados a partir da sua navegação. Aproveite!</h2>
        <MenuItem text="Conheça a Linx"/>
        <MenuItem text="Ajude o algoritmo"/>
        <MenuItem text="Seus produtos"/>
        <MenuItem text="Compartilhe"/>
    </div>
  )
}

export default Header