import React from 'react';
import cls from '../../../styles/AuctionCard.module.sass'
import Image from "next/image";

const AuctionCard = ({imgSrc, textInfo, id}) => {
    return (
        <div className={cls.auctionCardContainer}>
            <div className={cls.auctionCardTimerContainer}>
                <div className={cls.auctionCardTimer}>
                    <div className={cls.imageContainer}>
                        <Image className={cls.auctionCardImage} layout={'fill'}  objectFit={'cover'}  src={imgSrc}/>
                    </div>
                    <div className={cls.timerInfo}>
                        <h2 className={cls.toFinishOrStart}>{textInfo}</h2>
                         <div className={cls.countDate}>
                             <div className={`count ${cls.countDateDays}`}>
                                 <p>05</p>
                                 <p>Дні</p>
                             </div>
                             <div className={`count ${cls.countDateHours}`}>
                                 <p>05</p>
                                 <p>Години</p>
                             </div>
                             <div className={`count ${cls.countDateMinutes}`}>
                                 <p>05</p>
                                 <p>Хвилин</p>
                             </div>
                             <div className={`count ${cls.countDateSeconds}`}>
                                 <p>05</p>
                                 <p>Секунд</p>
                             </div>
                         </div>
                    </div>
                </div>
            </div>
            <div className={cls.auctionCardInfoContainer}>
                <div className={cls.auctionCardInfo}>
                    <div className={cls.auctionInfo}>
                        <h3>{`Аукціон №${id}`}</h3>
                        <p>Онлайн торг почнеться в Пт 19 11:00</p>
                    </div>
                    <div className={cls.auctionBtnContainer}>
                        <a className={cls.auctionBtn} href="#">Поставить сейчас</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuctionCard;