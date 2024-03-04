import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next'

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        { children }
        <SpeedInsights />
        <Footer />
    </>
  )
}

export default Layout