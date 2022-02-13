import React from 'react';
import cls from '../styles/Production.module.sass'
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import {useSelector} from "react-redux";
import Image from "next/image";

const Production = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)

    return (
        <div>
            {menuShowToggle && <GeneralMenu/> }
            <GeneralHeader logoColor={'dark'}/>
            <div className="production">
               <div className={cls.productionBcgContainer}>
                   <Image layout={'fill'} objectFit={'cover'} src={'/productionBcg.png'}/>
               </div>
                <div className={cls.productionContainer}>
                    <div className="productionInfo">
                        <div className={cls.productionInfoContainer}>
                            <h2>Как Аrtbee вам поможет</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Production;