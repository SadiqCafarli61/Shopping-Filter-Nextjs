import Cart from '@/Components/Cart'
import Header from '@/Components/Header'
import React from 'react'

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Header />
        <Cart />
        {children}

    </React.Fragment>
    
  )
}

export default Layout