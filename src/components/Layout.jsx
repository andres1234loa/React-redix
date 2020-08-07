//los layout funciona para agregar un encabezado o un footer en las secciones de navegacion
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout =({children})=> 
(
    <div className="App">
        <Header />
            {children}
        <Footer />

    </div>
)
export default Layout 