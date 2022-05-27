import React from 'react'

export default function Project() {

    return (
        <div className='projects-container'>
                <h2 className='project-titles'  >Prosjekter</h2>
                
            <div className='project'>
                <h3 className='project-titles'>Order summary component</h3>
                <p> En av det første html/css prosjektene jeg gjorde. Målet med dette prosjektet var å bli komfortabel med css layouts.</p>
                <p><a className="github-button" href='https://github.com/JohanO98/First-Frontend-mentor-challenge'>GitHub</a></p>
            </div>

            <div className='project'>
                <h3 className='project-titles'>Stats preview card component</h3>
                <p>Målet med dette prosjektet var lignende det første prosjektet med å bli komfortabel med css layouts og html.</p>
                <p><a className="github-button" href='https://github.com/JohanO98/Frontend-challenge-Stats-preview-card-component'>GitHub</a></p>
            </div>

            <div className='project'>
                <h3 className='project-titles'>Obnoxius helmet</h3>
                <p>  Det som var målet med dette prosjektet var å lage en "fantasy" bar nettside. I dette prosjektet er første gang jeg bruker javascript.</p>
                <p><a className="github-button" href='https://github.com/JohanO98/The-Obnoxius-Helmet'>GitHub</a></p>
            </div>

            <div className='project'>
                <h3 className='project-titles'> Digital Buisness Card</h3>
                <p>Dette er det første React prosjektet jeg gjorde.</p>
            <p><a className="github-button" href='https://github.com/JohanO98/Digital-business-card'>GitHub</a></p>
            </div>

            <div>
            <h3 className='project-titles'>Portfolio</h3>
            <p>Link til github siden for denne protifolien</p>
            <p><a className="github-button" href='https://github.com/JohanO98/portfolio'>GitHub</a></p>
            </div>
        </div>
    )
}

