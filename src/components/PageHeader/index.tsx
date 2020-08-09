import React from 'react'

import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

// This will tell what props your component has
interface PageHeaderProps{
    title: string;
    description?: string; // use '?' in the props name if it's optional
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {

    return(

        <header className="page-header">

            <div className="top-bar-container">
                <Link to='/' >
                    <img src={backIcon} alt="Voltar"/>
                </Link>

                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>

            {/* '&&'  works like an if. If condition true, return... */}
                { props.description && <p>{props.description}</p> } 

                {props.children}
            </div>


        </header>

    )
}

export default PageHeader;