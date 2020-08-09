import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

// Input recebe todos os atributos possiveis de <input>. Esses atributos são passados através do "...rest"
                                    //Desestruturando objeto props
const Input: React.FC<InputProp> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
};

export default Input;