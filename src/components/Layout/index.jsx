import React from 'react'
import Header from './header'
import Footer from './footer'
import Menubar from './menubar'

const Layout = ({children}) => {
    return (
        <>
            <Header></Header>
            <Menubar/>
            {children}
            <Footer></Footer>
        </>
    )
}

export default Layout;