import React from 'react'
import Header from '../Header/Header'
import CollapsedHeader from '../Header/CollapsedHeader'
import useDimensions from '../../hooks/useDimensions'
import Footer from '../footer/Footer'
function Layout({children}) {
  const { width } = useDimensions();
  return (
    <>
    {
      width > 640 
      ? <Header/>
      : <CollapsedHeader/>
    }

    <main>
      {
        children
      }
    </main>
    <Footer/>
    </>
  )
}

export default Layout