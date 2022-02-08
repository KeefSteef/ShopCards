import React from 'react';
import Image from "next/image";
import FooterSupportContacts from "../FooterSupportContacts/FooterSupportContacts";
import cls from './FooterSupport.module.sass'

const FooterSupport = () => {
    return (
        <footer className={cls.footerSupport}>
            <FooterSupportContacts/>
            <div className={cls.footerSupportBtnList}>
              <div className={cls.footerItemsContainer}>
                  <div className={cls.footerLeftLinks}>
                      <div className={cls.footerLeftLinksFirstCol}>
                          <div className={cls.footerLeftTitle}>
                              <h4>ARTBEE</h4>
                          </div>
                          <ul className="footerLinks footerLeftLinksFirstCol">
                              <li>Головна</li>
                              <li>Аукціон</li>
                              <li>Галерея</li>
                              <li>Послуги</li>
                              <li>Митці</li>
                          </ul>
                      </div>
                      <ul className={cls.footerLeftLinksSecondCol}>
                          <li>FAQ</li>
                          <li>NFT</li>
                          <li>Контакти</li>
                      </ul>
                  </div>
                  <div className={cls.footerRightLinks}>
                      <div className="footerRightFirstCol">
                          <div className="footerRightTitle">
                              <h4>просування</h4>
                          </div>
                          <ul className="footerLinks footerLeftLinksFirstCol">
                              <li>Экспертиза</li>
                              <li>Оцінка</li>
                              <li>Продюсування</li>
                              <li>Виставки</li>
                          </ul>
                      </div>
                      <div className="footerRightSecondCol">
                          <div className="footerRightTitle">
                              <h4>Поширені запитання</h4>
                          </div>
                          <ul className="footerLinks footerLeftLinksFirstCol">
                              <li>Питання 1</li>
                              <li>Питання 2</li>
                              <li>Питання 3</li>
                              <li>Питання 4</li>
                              <li>Питання 5</li>
                              <li>Питання 6</li>
                          </ul>
                      </div>
                  </div>
              </div>
            </div>
                <div className={cls.footerBottom}>
                    <div className={cls.footerBottomLeftLinks}>
                        <div className="footerBottomLogo">
                            <Image width={150} height={60} src={'/yellowLogo.svg'}/>
                        </div>
                        <div className="footerBottomLeftText">
                            <p>@2021 Artbee</p>
                        </div>
                    </div>
                    <div className={cls.footerBottomRightLinks}>
                        <ul className="footerBottomLinks">
                            <li>Умови використання</li>
                            <li>Політика конфіденційності</li>
                            <li>Безпека</li>
                            <li>Партнерська угода</li>
                        </ul>
                    </div>
                </div>
        </footer>
    );
};

export default FooterSupport;