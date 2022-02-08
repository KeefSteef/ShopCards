import React from 'react';
import Image from "next/image";
import cls from './FooterSupportContacts.module.sass'

const FooterSupportContacts = () => {
    return (
        <div>
            <div className={cls.footerSupportContacts}>
                <div className={cls.footerFirstIconsList}>
                    <div style={{backgroundImage: `url('/bee5.svg')`}} className={cls.beeIcon}/>
                    <div style={{backgroundImage: `url('/bee4.svg')`}} className={cls.beeIcon}/>
                    <div style={{backgroundImage: `url('/bee2.svg')`}} className={cls.beeIcon}/>
                </div>
                <div className={cls.footerTitle}>
                    <h2><span>Є питання ?</span> <br/>
                        Проконсультуйтеся зі спеціалістом Artbee</h2>
                </div>
                <div className={cls.footerDesc}>
                    <p>
                        Надішлість запитання нам на адресу <span>artbee@gmail.com</span> або зателефонуйте по телефону + 1-234-567-890 для отримання додаткової информації про те, які послуги надає  Artbee.
                    </p>
                    <div className="footerDescBtnContainer">
                        <div className="footerDescBtn">
                            <button>написати</button>
                        </div>
                    </div>
                </div>
                <div className={cls.footerSecondIconsList}>
                    <div style={{backgroundImage: `url('/bee3.svg')`}} className={cls.beeIcon}/>
                    <div style={{backgroundImage: `url('/bee7.svg')`}} className={cls.beeIcon}/>
                    <div style={{backgroundImage: `url('/bee8.svg')`}} className={cls.beeIcon}/>
                    <div style={{backgroundImage: `url('/bee1.svg')`}} className={cls.beeIcon}/>
                </div>
            </div>
        </div>
    );
};

export default FooterSupportContacts;