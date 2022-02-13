import React from 'react';
import cls from '../styles/Expertise.module.sass'
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import {useSelector} from "react-redux";
import Image from "next/image";

const Expertise = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)

    return (
        <div>
            {menuShowToggle && <GeneralMenu/> }
            <GeneralHeader logoColor={'dark'}/>
            <div className="expertise">
                <div className={cls.expertiseBcgContainer}>
                    <Image layout={'fill'} objectFit={'cover'} src={'/expertiseBcg.png'}/>
                </div>
                <div className={cls.expertiseContainer}>
                    <div className="expertiseInfo">
                        <div className={cls.expertiseInfoContainer}>
                            <h2>Как Аrtbee вам поможет</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;