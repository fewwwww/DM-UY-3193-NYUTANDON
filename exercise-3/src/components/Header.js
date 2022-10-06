import React from "react";
import './Header.css'

const Header = () => {
  return (
    <header>
      <a href="/?city=Shanghai">Shanghai</a>
      <a href="/?city=Yakutsk">Yakutsk</a>
      <a href="/?city=Melbourne">Melbourne</a>
      <a href="/?city=Irvine">Irvine</a>
    </header>
  )
}

export default Header;
