import React, {useState, useEffect, useRef} from 'react'
import Dragon from '../images/Dragon.svg'
import Hamburger from './Hamburger';
import { Link } from 'react-router-dom';
import { MenuItems } from "./Menuitems"
export default function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className="nav-navbar">
            <img className='nav-image' src={Dragon}></img>
            <ul className="nav-list"> 
            {MenuItems.map((item, index) => {
                return (
                    <li className='nav-button' key={index}>
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                        </Link>
                    </li>
                )})
                }

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
                        transform: translateY(-110%)
                        transition: width 200ms ease;
                        
                        

                    }
                }
                
               
                
            `}</style>
            
        </div>
    )
}


