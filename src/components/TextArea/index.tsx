import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProp extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;
}

// Textarea recebe todos os atributos possiveis de <Textarea>. Esses atributos são passados através do "...rest"
                                    //Desestruturando objeto props
const Textarea: React.FC<TextareaProp> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
};

export default Textarea;