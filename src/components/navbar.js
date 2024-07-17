import React from "react"

export default function Navbar(){
    return(
        <div className="nav-cont">
            <nav className="nav">
                <input id="nav-toggle"type="checkbox" class="check"></input>
                <a href="/mari" className="site--title">Maritest</a>
                <ul className="links">
                    <li><a href="/about">About us</a></li>
                    <li><a href="/team">The team</a></li>
                    <li><a href="/contact">Contact us</a></li>
                </ul>
                <label for="nav-toggle" class="icon-burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </label>
            </nav>
        </div>
    )
}