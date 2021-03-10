import React from 'react'
import { Link } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  render() {
    return (
      <header>
        <div class="top-bar">
          <p>idaho falls bridal &amp; prom<span class="mobile-hidden"> - featuring elizabeth cooper design</span></p>
        </div>
        <nav
          className="navbar is-transparent"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="desktop-nav">
            <Link to="/" title="Logo"></Link>
            <Link to="/bridal">Bridal</Link>
            <Link to="/prom">Prom</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="menu-icon" id="menu-icon">
            <p>Menu</p>
            <span id="icon-x"></span>
          </div>
          <div class="mobile-nav" id="mobile-nav">
            <Link to="/" title="Logo"></Link>
            <Link to="/bridal">Bridal</Link>
            <Link to="/prom">Prom</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a href="https://www.google.com/maps/place/Tangled+in+Tulle+Bridal+%26+Prom/@43.498405,-112.0017527,17z/data=!3m1!4b1!4m5!3m4!1s0x53545e8e83e8c13b:0x7a5be306401dfcde!8m2!3d43.498405!4d-111.999564">Get Directions</a>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar
