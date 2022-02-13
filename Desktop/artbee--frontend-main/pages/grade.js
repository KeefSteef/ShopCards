import React from 'react';
import cls from '../styles/Grade.module.sass'
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import {useSelector} from "react-redux";
import Image from "next/image";

const Grade = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)

    return (
        <div>
            {menuShowToggle && <GeneralMenu/> }
            <GeneralHeader logoColor={'dark'}/>
            <div className="grade">
                <div className={cls.gradeBcgContainer}>
                    <Image layout={'fill'} objectFit={'cover'} src={'/gradeBcg.png'}/>
                </div>
                <div className={cls.gradeContainer}>
                    <div className="gradeInfo">
                        <div className={cls.gradeInfoContainer}>
                            <h2>Как Аrtbee вам поможет</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grade;