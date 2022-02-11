import React, {useState} from 'react';
import {useSelector} from "react-redux";
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import cls from '/styles/FaqPage.module.sass'
import Image from "next/image";
import FaqPageTab from "../components/FaqPageTab/FaqPageTab";
import FooterSupport from "../components/FooterSupport/FooterSupport";

const FaqPage = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)
    const [dataOfHelpTabs , setDataOfHelpTabs] = useState([
        {
            title: 'Оценка и экспертиза',
            description: 'Специалисты будет онлайн оценивать стоимость картин перед публикацией,' +
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'
        },
        {
            title: 'Аукционы и выставки',
            description: 'Специалисты будет онлайн оценивать стоимость картин перед публикацией,'

        },
        {
            title: 'Производство и продажа',
            description: 'Специалисты будет онлайн оценивать стоимость картин перед публикацией,' +
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'+
            'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.' +
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'+
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'
        },
        {
            title: 'Галереи и аукционы',
            description: 'Специалисты будет онлайн оценивать стоимость картин перед публикацией,' +
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'
        },
        {
            title: 'Подписки',
            description: 'Специалисты будет онлайн оценивать стоимость картин перед публикацией,' +
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'
        },
        {
            title: 'Безопасность',
            description: 'Специалисты будет онлайн оценивать стоимость картин перед публикацией,' +
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'
        },
        {
            title: 'Доставка',
            description: 'Специалисты будет онлайн оценивать стоимость картин перед публикацией,' +
                'тем самым поможет продавцу установить действительно справедливую цену. ' +
                'Будет создана комьюнити уважаемых ценителей искусства, которое создаст рейтинг художников.'
        }
    ])

    return (
        <div className={cls.faqPage}>
            {menuShowToggle && <GeneralMenu/> }
            <GeneralHeader/>
            <div className={cls.faqPageContainer}>
               <div className={cls.faqPageBcg}>
                   <Image className={cls.faqPageBcg} objectFit={'cover'} layout={'fill'} src={'/faqBcg.png'}/>
               </div>
                <div className={cls.faqPageInfo}>
                    <div className={cls.fagPageInfoContainer}>
                        <div className={cls.faqPageTitle}>
                            <div className={cls.faqPageTitleContainer}>
                                <h3>FAQ</h3>
                                <p>Ответы на вопросы</p>
                            </div>
                        </div>
                        <div className={cls.faqPageListOfTabs}>
                            {
                                dataOfHelpTabs.map((tabInfo, index) => {
                                    const { title, description } = tabInfo
                                    return <FaqPageTab  key={title + index} tabTitle={title} tabDesc={description} />
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className={cls.faqPageFooter}>
                    <FooterSupport/>
                </div>
            </div>
        </div>
    );
};

export default FaqPage;