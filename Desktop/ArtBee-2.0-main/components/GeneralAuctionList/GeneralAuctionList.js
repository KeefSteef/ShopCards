import React, {useState} from 'react';
import Image from 'next/image'
import cls from '../../styles/GeneralAuctionList.module.sass'
import AuctionCard from "../UI/AuctionCard/AuctionCard";

const GeneralAuctionList = () => {
    const [dataOfAuctionCard] = useState([
        {
            textInfo: 'до кінця:',
            img: '/auctionBcg.png',
            // Field for timer
        },
        {
            textInfo: 'до початку залишилося:',
            img: '/auctionBcg2.png',
            // Field for timer

        },
        {
            textInfo: 'до початку залишилося:',
            img: '/auctionBcg3.png',
            // Field for timer

        },

    ])
    return (
        <div>
            <div className={cls.auctionListContainer}>
                <Image className={cls.auctionBcg} layout={'fill'} src={'/categoryBack1.png'} />
                <div className={cls.auctionList}>
                    {dataOfAuctionCard?.map((card, i) => {
                        const {textInfo, img} = card
                        return <AuctionCard textInfo={textInfo} imgSrc={img} id={i + 1}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default GeneralAuctionList;