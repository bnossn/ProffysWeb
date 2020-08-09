import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' /* Used for redirects without loading pages (instead of <a></a>) */

/* Todas as imagens devem ser importadas */
import logoImg from '../../assets/images/logo.svg' /* '..' volta uma pasta no caminho */
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import api from '../../services/api'

import './styles.css'


function Landing() {
    const [totalConnection, setTotalConnections] = useState(0);

    // With useEffect you tell react to execute a function whenever a variable changes
    // If no variable is passed, the function is executed when component is rendered (like componentDidMount)
    useEffect(() => {
        api.get('connections')
            .then(response => {

                const { total } = response.data;

                setTotalConnections(total);

            })
    }, [])

    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">  {/* container esta recebendo um max-width: 700px do global.css */}
            
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img 
                    src={landingImg} 
                    alt="Plataforma de estudos" 
                    className="hero-image" 
                />

                <div className="buttons-container">
                    <Link 
                        to="/study" className='study'>
                        <img src={studyIcon} alt="Estudar"/>
                        Estudar
                    </Link>

                    <Link 
                        to="/give-classes" className='give-classes'>
                        <img src={giveClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de {totalConnection} conexões ja realizadas
                    <img src={purpleHeartIcon} alt="Coração Roxo"/>
                </span>
            </div>
        </div>
    )
}

export default Landing;