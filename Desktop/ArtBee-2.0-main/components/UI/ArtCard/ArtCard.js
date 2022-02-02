import React from 'react';
import Image from "next/image";
import cls from '../../../styles/ArtCard.module.sass'

const ArtCard = ({artImgLink, artName, authorName, year, price }) => {
    return (
        <div>
            <div className={cls.artCardContainer}>
                <div className={cls.artImageContainer}>
                    <Image className={cls.artImg} objectFit={'none'} layout={'fill'} quality={100} src={artImgLink}/>
                </div>
                <div className={cls.artInfoContainer}>
                    <div className={cls.artDescContainer}>
                        <div className={cls.artDesc}>
                            <h3>{authorName}</h3>
                            <p>{artName} , {year}</p>
                        </div>
                        <div className={cls.artFavIconContainer}>
                            <div className={cls.artFavIcon}>
                                <Image width={50} height={50} src={'/Like.svg'}/>
                            </div>
                        </div>
                    </div>
                    <div className={cls.artFooter}>
                        <small>$ {price}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ArtCard;