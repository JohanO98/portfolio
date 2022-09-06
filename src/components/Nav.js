import React, {useState, useEffect, useRef} from 'react'
import Dragon from '../images/Dragon.svg'
import Hamburger from './Hamburger';
export default function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className="nav-navbar">
            <img className='nav-image' src={Dragon}></img>
            <ul className="nav-list"> 
                <li className="nav-button nav-button1">
                    <a className='link-page' href="/about-me">Om meg</a>
                </li>
                <li className="nav-button nav-button2">
                    <a className='link-page' href="/projects">Prosjekter</a>
                </li>
                <li className="nav-button nav-button3">
                    <a className='link-page' href="/contact-me">Kontakt</a>
                </li>
            </ul>

            <div className='hamburger' onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen}/>
            </div>
            <style jsx>{`
                .hamburger{ 
                    display: none; 
                }

                @media (max-width: 750px){   
                    .hamburger {
                        display: flex;
                    }
                    .nav-list{
                        display: ${hamburgerOpen ? 'flex' : 'none'};
                        transition: transform 1s;
                        

                    }
                }
                
               
                
            `}</style>
            
        </div>
    )
}
