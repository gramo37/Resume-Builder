import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <div class="navbar" id="navbar-id">
            <a class="logo" href="#">My Awesome Kart</a>
            <div class="components-container" id="components-container-id">
                <ul class="left-component">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a id="dropdown-clicker" href="#">
                            Categories
                        </a>
                        <ul class="dropdown" id="dropdown-id">
                            <li><a href="#">Shopping</a></li>
                            <li><a href="#">Clothes</a></li>
                            <li>
                                <hr />
                            </li>
                            <li><a href="#">Books</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Login</a>
                    </li>
                </ul>
                <form class="search-form" id="search-form-id">
                    <input class="search-bar" type="search" placeholder="Search" />
                    <button class="search-button" id="search-button-id" type="submit">Search</button>
                </form>
            </div>
            <div id="hamburger-icon">
                <div class="hamburger-icon-container" onclick="myFunction(this)">
                    <div class="bar1"></div>
                    <div class="bar2"></div>
                    <div class="bar3"></div>
                  </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar