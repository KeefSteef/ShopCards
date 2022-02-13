import React from 'react';
import cls from '../styles/AuctionPage.module.sass'
import Image from "next/image";
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import FooterSupport from "../components/FooterSupport/FooterSupport";
import {useSelector} from "react-redux";
const Auction = () => {
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)

    return (
        <div className={cls.auctionPage}>
            {menuShowToggle && <GeneralMenu/> }
            <GeneralHeader logoColor={'dark'}/>
                <div className="auctionPageContainer">
                    <div className={cls.auctionPageHome}>
                        <div className={cls.auctionBcgContainer}>
                            <Image className={cls.auctionBcg} objectFit={'cover'} quality={100} src={'/auctionPageBcg.png'} layout={'fill'}/>
                        </div>
                        <div className={cls.auctionPageScroll}>
                            <div className={cls.auctionPageScrollContainer}>
                                    <div className={cls.progressBar}>
                                        <div className={cls.runner}/>
                                    </div>
                                    <p>Гортай</p>
                            </div>
                        </div>
                       <div className={cls.auctionPageHome}>
                          <div className={cls.auctionPageHomeInfo}>
                              <div className="auctionPageHomeTitle">
                                  <div className={cls.auctionPageHomeTitleContainer}>
                                      <h2>мистецтво з <br/> <span>artbee</span></h2>
                                  </div>
                              </div>
                              <div className={cls.auctionPageBtn}>
                                  <button>Актуальні події</button>
                                  <button>Виставити роботу</button>
                              </div>
                          </div>
                       </div>
                    </div>
                    <div className={cls.auctionPageMain}>
                        <div className={cls.auctionPageMainContainer}>
                            <div className={cls.auctionPageFirstDesc}>
                                <div className={cls.auctionPageFirstDescContainer}>
                                    <div className={cls.auctionPageFirstDescTitle}>
                                        <h3>Як це працює ?</h3>
                                    </div>
                                    <div className={cls.auctionPageFirstDescInfo}>
                                        <div className={cls.auctionPageFirstDescInfoContainer}>
                                            <div className={cls.auctionDesc}>
                                                <h4>Отправьте свои работы</h4>
                                                <p>Отправьте сведения о ваших произведениях искусства и изображения. Artbee рассмотрит и утвердит подходящие заявки</p>
                                            </div>
                                            <div className={cls.auctionDesc}>
                                                <h4>Получите несколько предложений</h4>
                                                <p>Если ваша работа будет принята, вы получите конкурентные предложения на поставку от курируемых Artbee аукционов, аукционных домов и галерей.</p>
                                            </div>
                                            <div className={cls.auctionDesc}>
                                                <h4>Подбирайте и продавайте</h4>
                                                <p>Наши специалисты помогут вам выбрать лучший вариант для продажи вашей работы.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                <div className={cls.auctionPageSecondDesc}>
                                    <div className={cls.auctionPageSecondDescContainer}>
                                        <div className={cls.auctionPageSecondDescTitle}>
                                            <h3>Розумний і сучасний спосіб продати своє мистецтво</h3>
                                            <div className={cls.titleImgContainer}>
                                                <Image src={'/Hammer.png'} width={500} quality={100} height={500}/>
                                            </div>
                                        </div>
                                        <div className={cls.auctionPageSecondDescInfo}>
                                            <div className={cls.auctionPageSecondDescInfoContainer}>
                                                <div className={cls.auctionDesc}>
                                                    <h4>Безрисковые продажи</h4>
                                                    <p>Мы не предлагаем никаких авансовых платежей, наши аукционы являются конфиденциальными и , что самое важное, вы сохраняете свои произведения искусства до тех пор, пока они не будут проданы.</p>
                                                </div>
                                                <div className={cls.auctionDesc}>
                                                    <h4>Аналитический просчёт</h4>
                                                    <p>Наша большая глобальная аудитория коллекционеров обеспечивают лучший поиск партнеров для продажи ваших работ.
                                                    </p>
                                                </div>
                                                <div className={cls.auctionDesc}>
                                                    <h4>Скорость и эффективность</h4>
                                                    <p>Мы представим вам вариант продажи, который позволит вам быстро продать свою работу.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <FooterSupport/>
                </div>
        </div>
    );
};

export default Auction;