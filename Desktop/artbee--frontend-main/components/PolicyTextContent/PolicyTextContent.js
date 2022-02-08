import React from 'react';
import {useSelector} from "react-redux";
import cls from './PolicyTextContent.module.sass'

const PolicyTextContent = ({title, text}) => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)

    return (
        <div className={cls.textContent}>
            <h3 className={cls.titleTextContent}>{title}</h3>
            <p className={cls.paragraphTextContent}>{text}</p>
        </div>
    );
};

export default PolicyTextContent;