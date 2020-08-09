import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProp extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;
}

// Select recebe todos os atributos possiveis de <Select>. Esses atributos são passados através do "...rest"
                                    //Desestruturando objeto props
const Select: React.FC<SelectProp> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">

            <label htmlFor={name}>{label}</label>

            <select value='' id={name} {...rest} >

                <option value='' disabled hidden>Selecione uma opção</option>

                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}

            </select>

        </div>
    );
};

export default Select;