import React from 'react';
import cls from './NftTab.module.sass'

const NftTab = ({ nftTabTitle, nftTabText }) => {
    return (
        <div className={cls.nftTab}>
            <div className={cls.nftTabContainer}>
                <div className={cls.nftTabLeftContent}>
                    <h3>{nftTabTitle}</h3>
                </div>
                <div className={cls.nftTabRightContent}>
                    <p>{nftTabText}</p>
                </div>
            </div>
        </div>
    );
};

export default NftTab;