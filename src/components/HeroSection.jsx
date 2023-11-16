import React, { useEffect } from 'react'
import Typed from 'typed.js'

const HeroSection = () => {

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

useEffect(() => {
  
  const typed = select('.typed')
  if(typed){
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings, 
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    })
  }
},[])

  return <section id="hero" className="d-flex justify-content-start align-items-center">
  <div className="hero-container" data-aos="fade-in">
    <h1>Kanchan Sharma</h1>
    <p>I'm <span className="typed" data-typed-items="Designer,UI/UX Developer,Freelancer"></span></p>
  </div>
</section>
}

export default HeroSection