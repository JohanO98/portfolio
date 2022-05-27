import React, { useState, useEffect } from "react"


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    
    const visibiltitytoggle = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true)
            console.log("hi")
        }
        else {
            setIsVisible(false)
            console.log('WOOOOOOOO')
        }
    }
    

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"

        });
    }

    useEffect(() => {
        window.addEventListener("scroll", visibiltitytoggle);
    }, []);

    return (
        <div className="scroll-button-container">
            {isVisible &&
            <div onClick={scrollToTop}>
                <img src={require('../images/Arrow-Up-Transparent-PNG.png')} className="scroll-image" alt='scroll to top'></img>
            </div>}

        </div>
    )

}
