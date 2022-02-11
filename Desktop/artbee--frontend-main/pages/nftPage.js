import React, {useState} from 'react';
import cls from '../styles/nftPage.module.sass'
import Image from 'next/image'
import GeneralHeader  from "../components/GeneralHeader/GeneralHeader";
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import {useSelector} from "react-redux";
import NftTab from "../components/NftTab/NftTab";
import FooterSupport from "../components/FooterSupport/FooterSupport";

const NftPage = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)
    const [onHoverBtn, setHoverBtnStatus] = useState(false)

    return (
        <div className={cls.nftPage}>
            <GeneralHeader logoColor={'dark'}/>
            {menuShowToggle && <GeneralMenu/>}
            <div className={cls.imgContainer}>
                <Image className={cls.nftBackImg} src={'/nftBack.png'} layout={'fill'} />
            </div>
            <div className={cls.nftInfo}>
                <div className={cls.nftInfoContainer}>
                    <h2>NFT</h2>
                    <div className={cls.nftInfoParagraphs}>
                        <p>
                            NFT — це одиниця даних у цифровій книзі, що називається блокчейном, де кожен NFT може представляти унікальний цифровий елемент, і тому кожен з них не взаємозамінний.
                        </p>
                        <p>Невзаємозамінні токени є дефіцитним класом активів. Максимальний запас будь-якого з токенів зазвичай визначений і обмежений конкретним числом. Це позбавляє необхідності системі давати оцінку токену, оцінюючи його. Цю функцію на себе вже взяв блокчейн. Вже зараз невзаємозамінні токени використовують у геймінг індустрії.</p>
                    </div>
                </div>
                <div className={cls.nftDescContainer}>
                    <NftTab nftTabText={'Токен — це ексклюзивне право на товар, тому володіючи ним, купуючи, продаючи або обмінюючи, усі ці операції здійснюються із самим товаром. Ми завжди можемо дізнатися ким був такий товар створений або кому він зараз належить, тому що токени зберігаються у відкритому блокчейні й саме через це інформація про товар, історія його операцій буде доступна та достовірна завжди.'} nftTabTitle={'Як це працює ?'}/>
                    <NftTab nftTabText={'Об’єкти інтелектуальної власності зазвичай є унікальними, у свою чергу патенти та свідоцтва на ці об’єкти засвідчують виключне право інтелектуальної власності на них. Охоронні документи (патенти, свідоцтва) містять дані про сам об’єкт, про право інтелектуальної власності й час реєстрації та дії цього права. Це дуже схоже на те, що містить сам токен NFT, правда ж?'} nftTabTitle={'Новий інструмент для інтелектуальної власності'}/>
                    <NftTab nftTabText={'Якщо ви покупець або ж колекціонер, то у вас з’являється можливість здійснити інвестиції у віртуальний актив нового типу, який із часом може подорожчати і ви його можете вигідно перепродати.'} nftTabTitle={'Цифрове мистецтво — мистецтво нового часу!'}/>
                </div>
                <div className={cls.nftBtns}>
                    <div className={cls.nftBtnsContainer}>
                        <button onMouseEnter={setHoverBtnStatus.bind(this, true)} onMouseLeave={setHoverBtnStatus.bind(this, false)}>
                            { onHoverBtn ? <p>Актуальні події</p> : <p>Галерея</p> }
                        </button>
                        <button>Виставити роботу</button>
                    </div>
                </div>
            </div>
            <footer className={cls.nftFooter}>
                <FooterSupport/>
            </footer>
        </div>
    );
};

export default NftPage;