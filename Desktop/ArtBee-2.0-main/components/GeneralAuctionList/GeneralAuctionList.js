import React from 'react';
import Image from 'next/image'
import cls from '../../styles/GeneralAuctionList.module.sass'
import AuctionCard from "../UI/AuctionCard/AuctionCard";

const GeneralAuctionList = () => {
    return (
        <div>
            <div className={cls.auctionListContainer}>
                <Image className={cls.auctionBcg} layout={'fill'} src={'/categoryBack1.png'} />
                <div className={cls.auctionList}>
                    <AuctionCard imgSrc={'../public/auctionBcg.png'}/>
                    <AuctionCard/>
                    <AuctionCard/>
                </div>
            </div>
        </div>
    );
};

export default GeneralAuctionList;