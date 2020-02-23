import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.tronalddump.io/">Tronald Dump</a>
        </footer>
      </div>
    </>
  )
}

export default Layout