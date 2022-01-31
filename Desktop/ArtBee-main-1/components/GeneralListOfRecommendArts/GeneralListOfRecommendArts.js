import React,{useState} from 'react';
import Image from "next/image";
import cls from '../../styles/GeneralListOfRecommendArts.module.sass'
import ArtCard from "../UI/ArtCard/ArtCard";

const GeneralListOfRecommendArts = () => {
    
    const [artsToWall, setArtsToWall] = useState([
        {
            price: '11.000',
            artName: 'Имя альбома',
            artImgLink: '/seaArt.png',
            authorName: 'имя создателя',
            year: 'год'
        },
        {
            price: '11.000',
            artName: 'Имя альбома',
            artImgLink: '/redArt.png',
            authorName: 'имя создателя',
            year: 'год'
        },
        {
            price: '11.000',
            artName: 'Имя альбома',
            artImgLink: '/strangeArt.png',
            authorName: 'имя создателя',
            year: 'год'
        },
        {
            price: '11.000',
            artName: 'Имя альбома',
            artImgLink: '/classicArt.png',
            authorName: 'имя создателя',
            year: 'год'
        }
    ])
    
    return (
        <div>
            <div className={cls.listOfRecommendArtsContainer}>
                <Image className={cls.bcgImg} layout={'fill'} src={'/categoryBack1.png'} />
                <div className={cls.listOfArtsContainer}>
                    <ul className={cls.listOfArts}>
                        {
                            artsToWall?.map((art, index) => {
                                const {price, artName, artImgLink, authorName, year} = art
                                return (<li key={art.authorName + index}>
                                        <ArtCard price={price} artName={artName} artImgLink={artImgLink} authorName={authorName} year={year}/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GeneralListOfRecommendArts;