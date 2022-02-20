import { FC, ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

type leyoutProps = { children: ReactNode }

const Layout:FC<leyoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Layout
