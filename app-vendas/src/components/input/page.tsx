import styles from './input.module.css'
import React from 'react'
interface InputProps {
    placeholder: string;
    name: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, name, value, onChange }) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            className={styles.input}
        />
    );
};

export default Input;