import React from "react";
import Contact from "./Contact";
import Main from "./Main";
import Nav from "./Nav";
import Logos from '../images/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png'
import phplogo from '../images/PHP-logo.png'
export default function Home() {
    return (
        <div class='home-container'>
            <div class='home-info'>
            <div class='home-navn'>
                <h4>Mitt navn er</h4> <h1>Johan Oen</h1>
            </div> 
            <div className="code-info">
            <h3>Fullstack-utvikler</h3>
            <h4>Html, CSS, Javascript, React, PHP, NodeJS</h4>
            </div>
                <div className='logo-container'>
                    <img className= "logos" src={Logos}></img>
                    <img className='php-logo' src={phplogo}></img>
                </div>
            </div>

        </div>
    )


}