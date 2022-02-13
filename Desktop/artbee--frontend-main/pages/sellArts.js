import React from 'react';
import cls from '../styles/sellArts.module.sass'
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import {useSelector} from "react-redux";
import Image from "next/image";

const SellArts = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)

    return (
        <div>
            {menuShowToggle && <GeneralMenu/> }
            <GeneralHeader logoColor={'dark'}/>
            <div className="sellArts">
                <div className={cls.sellArtsBcgContainer}>
                    <Image layout={'fill'} objectFit={'cover'} src={'/productionBcg.png'}/>
                </div>
                <div className={cls.sellArtsContainer}>
                    <div className="sellArtsInfo">
                        <div className={cls.sellArtsInfoContainer}>
                            <h2>Как Аrtbee вам поможет</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellArts;