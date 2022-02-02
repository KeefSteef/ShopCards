import React from 'react';
import Image from 'next/image'
import cls from '../../styles/GeneralPreContent.module.sass'

const GeneralPreContent = ({titleIsColor = true, firstSenctence, secondSentence}) => {
    return (
        <div>
            <div className={cls.generalPreContentContainer}>
                <Image objectFit={'fill'} layout={'fill'} quality={100} src={'/normalRectBcg4.png'}/>
                <div className={cls.generalPreContentMain}>
                    <Image className={cls.listOfArts} width={1200} height={150} quality={100} src={'/listOfArts.png'}/>
                </div>
                <div className={cls.generalPreContentFooter}>
                    <div className={cls.preContentFooterInfo}>
                        <h2 style={{color: titleIsColor ?  '#FECC19' :  '#333333'}}>{firstSenctence}</h2>
                        <p style={{maxWidth: titleIsColor ? '250px' : 'inherit'}}>{secondSentence}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralPreContent;