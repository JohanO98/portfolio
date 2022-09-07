import React from 'react'
import Logos from '../images/html5-logo-devextreme-multi-purpose-controls-html-javascript-3.png'
import phplogo from '../images/PHP-logo.png'


export default function Main() {
    return (
        <div className='main-container'>
            <img className='img-container'src='./images/Johan_oen.jpg'></img>
            <div class='main-info'>
            <h1>Mitt navn er Johan Oen</h1>
            <h3>Fullstack-utvikler</h3>
            <h4>Html, CSS, Javascript, React, PHP, NodeJS</h4>
                <div className='logo-container'>
                    <img className= "logos" src={Logos}></img>
                    <img className='php-logo' src={phplogo}></img>
                </div>
            </div>

        </div>
    )
}