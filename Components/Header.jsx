import React, {useState, useEffect, useRef} from 'react'
import logo from "../public/assets/logo.svg"
import {AiOutlineSearch} from "react-icons/ai"
import styles from "../styles/Header.module.css"
import Image from 'next/image'
import {AiOutlineShoppingCart} from "react-icons/ai"
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  
  const [overlayMenuRef, setOverlayMenuRef] = useState(false)
  const overlayMenu = useRef()

 const openMenu = () => {

  setOverlayMenuRef(!overlayMenuRef)
  overlayMenu.current.classList.toggle('open')

 }


  return (
    <>

    <div className="overlay" ref={overlayMenu}>
    <div className="overlay-menu">
    <a href="">Shop</a>
  <a href="">Men</a>
  <a href="">Women</a>
  <a href="">Sale</a>
  <a href="">Our Heritage</a>
    </div>
  </div>
    
    
    <div className='header-section'>
      <button className='openMenu' onClick={openMenu}>
 {overlayMenuRef ? <AiOutlineClose   /> : <FaBars   />}
      </button>
      <div className="logo">
<Image  src={logo}/>
      </div>
      <div className={styles.links}>
      <a href="">Shop</a>
  <a href="">Men</a>
  <a href="">Women</a>
  <a href="">Sale</a>
  <a href="">Our Heritage</a>
      </div>
      <div className="buttons">
        <button>Login</button>
        <AiOutlineSearch className='searchIcon' />
        <AiOutlineShoppingCart className='shopIcon' />

      </div>

    </div>
    </>
  )
}

export default Header