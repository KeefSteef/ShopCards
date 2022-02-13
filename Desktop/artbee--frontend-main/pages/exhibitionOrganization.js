import React from 'react';
import cls from '../styles/exhibitionOrganization.module.sass'
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import {useSelector} from "react-redux";
import Image from "next/image";

const ExhibitionOrganization = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)

    return (
        <div>
            {menuShowToggle && <GeneralMenu/> }
            <GeneralHeader logoColor={'dark'}/>
            <div className="exhibitionOrganization">
                <div className={cls.exhibitionOrganizationBcgContainer}>
                    <Image layout={'fill'} objectFit={'cover'} src={'/gradeBcg.png'}/>
                </div>
                <div className={cls.exhibitionOrganizationContainer}>
                    <div className="exhibitionOrganizationInfo">
                        <div className={cls.exhibitionOrganizationInfoContainer}>
                            <h2>Как Аrtbee вам поможет</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExhibitionOrganization;