import React from 'react';
import Image from "next/image";
import cls from '../../styles/GeneralContacts.module.sass'
const GeneralContacts = () => {
    return (
            <div className={cls.generalContactContainer}>
                <Image className={cls.generalContactsBcg} layout={'fill'} src={'/categoryBack1.png'}/>
                <div className={cls.generalContactsInfoContainer}>
                    <div className={cls.subInfoContainer}>
                        <div className={cls.subGif}>
                            <Image quality={100} width={550} height={320} src={'/symbi.svg'}/>
                        </div>
                        <div className={cls.subInfo}>
                            <p>Подпишитесь на рассылку ArtBee</p>
                            <p>и не пропусти следующие события</p>
                            <div className={cls.subInfoSubmits}>
                                <input placeholder="Почта" className={cls.submitTextInput} type="text"/>
                                <button className={cls.submitBtn}>Подписаться</button>
                            </div>
                        </div>
                    </div>
                    <div className={cls.contactsInfoContainer}>
                        <div className={cls.contactsInfo}>
                            <div className={cls.contactsEmail}>
                                <a href={''}>ARTBEE.GALLERY@GMAIL.COM</a>
                            </div>
                            <div className={cls.contactsPhones}>
                                <p>+38 099 987 65 43</p>
                                <p>+38 099 987 65 43</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default GeneralContacts;