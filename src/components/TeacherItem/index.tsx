import React from 'react'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

// Como voce usa obj teacher, typeScript pede para declarar o tipo atŕavés da interface. Teacher é usado na TeacherList, por isso exportamos
export interface Teacher {
    id: number;
    subject: string;
    cost: number;
    user_id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

interface teacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<teacherItemProps> = ({ teacher }) => {

    function createNewConnection(){
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (

        <article className="teacher-item">

            <header>

                <img src={teacher.avatar} alt="Marcelo Freitas"/>

                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>

            </header>

            <p>{teacher.bio}</p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {teacher.cost}</strong>
                </p>

                <a 
                    target='_blank'
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`} 
                >
                    <img src={WhatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </a>
            </footer>

        </article>
    )
}

export default TeacherItem;