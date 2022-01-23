import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import {swipeSliderOptions} from "./Slider/options";
import mainImg from './img/Rectangle.png';
import cls from './ShopCard.module.sass'
import './Slider/SliderStyles.sass'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopCard = ({ sliderOptions, name, price, isAvailable = true }) => {
    const [onCardHover, setCardHoverOption] = useState(false);
    const [activeCircle, setActiveCircle] = useState(null)
    const [selectSize, setSelectSize] = useState(null)

    return (
        <div className={cls.cardContainer} data-test='card-container'>
            <div className="cardWrapperContainer">
                <div className={cls.cardInfo}>
                    <img className={cls.cardImg} src={mainImg} alt=""/>
                    {isAvailable || <div className={cls.disableContainer}>
                        <h1>Out of stock</h1>
                    </div>
                    }
                    <div data-test={'card-info-container'} className={cls.cardInfoContainer} onMouseLeave={setCardHoverOption.bind(this, false)} onMouseEnter={setCardHoverOption.bind(this, true)}>
                        {onCardHover ?null : <span className="paskuda"/>}
                        <div className={cls.cardHeader}>
                            <div style={{opacity: onCardHover ? 1 : 0}} data-test={'card-icons'} className={cls.cardIcons}>
                                <div className={cls.iconBcg}>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.9999 10.6667C13.5075 10.6699 13.022 10.7822 12.5782 10.9955C12.1344 11.2087 11.7434 11.5176 11.4332 11.9L7.18321 9.94166C7.38304 9.32978 7.38304 8.6702 7.18321 8.05833L11.4332 6.09999C11.9346 6.70497 12.6335 7.11339 13.4067 7.25319C14.1798 7.39299 14.9776 7.25518 15.659 6.86408C16.3405 6.47298 16.8619 5.85372 17.1312 5.11561C17.4005 4.3775 17.4004 3.56798 17.131 2.82992C16.8615 2.09185 16.34 1.4727 15.6585 1.08172C14.977 0.690738 14.1792 0.553072 13.4061 0.693013C12.6329 0.832955 11.9341 1.24151 11.4328 1.84657C10.9316 2.45163 10.6602 3.21431 10.6665 3.99999C10.6691 4.19852 10.6886 4.39647 10.7249 4.59166L6.32488 6.61666C5.85578 6.15798 5.26175 5.84792 4.61722 5.72535C3.97269 5.60278 3.30631 5.67313 2.70159 5.9276C2.09687 6.18207 1.58068 6.60934 1.21771 7.15588C0.854746 7.70241 0.661133 8.34391 0.661133 8.99999C0.661133 9.65608 0.854746 10.2976 1.21771 10.8441C1.58068 11.3906 2.09687 11.8179 2.70159 12.0724C3.30631 12.3269 3.97269 12.3972 4.61722 12.2746C5.26175 12.1521 5.85578 11.842 6.32488 11.3833L10.7249 13.4083C10.6886 13.6035 10.6691 13.8015 10.6665 14C10.6665 14.6593 10.862 15.3037 11.2283 15.8519C11.5946 16.4001 12.1152 16.8273 12.7243 17.0796C13.3334 17.3319 14.0036 17.3979 14.6502 17.2693C15.2968 17.1407 15.8907 16.8232 16.3569 16.357C16.8231 15.8908 17.1405 15.2969 17.2692 14.6503C17.3978 14.0037 17.3318 13.3335 17.0795 12.7244C16.8272 12.1153 16.3999 11.5947 15.8518 11.2284C15.3036 10.8622 14.6592 10.6667 13.9999 10.6667ZM13.9999 2.33333C14.3295 2.33333 14.6518 2.43108 14.9258 2.61421C15.1999 2.79735 15.4135 3.05764 15.5397 3.36219C15.6658 3.66673 15.6988 4.00184 15.6345 4.32514C15.5702 4.64845 15.4115 4.94542 15.1784 5.1785C14.9453 5.41159 14.6483 5.57033 14.325 5.63464C14.0017 5.69894 13.6666 5.66594 13.3621 5.53979C13.0575 5.41365 12.7972 5.20003 12.6141 4.92594C12.431 4.65186 12.3332 4.32963 12.3332 3.99999C12.3332 3.55797 12.5088 3.13404 12.8214 2.82148C13.1339 2.50892 13.5579 2.33333 13.9999 2.33333V2.33333ZM3.99988 10.6667C3.67025 10.6667 3.34801 10.5689 3.07393 10.3858C2.79985 10.2026 2.58623 9.94234 2.46008 9.6378C2.33394 9.33326 2.30093 8.99814 2.36524 8.67484C2.42955 8.35154 2.58828 8.05457 2.82137 7.82148C3.05446 7.58839 3.35143 7.42966 3.67473 7.36535C3.99803 7.30104 4.33314 7.33405 4.63769 7.46019C4.94223 7.58634 5.20253 7.79996 5.38566 8.07404C5.5688 8.34813 5.66655 8.67036 5.66655 8.99999C5.66655 9.44202 5.49095 9.86594 5.17839 10.1785C4.86583 10.4911 4.44191 10.6667 3.99988 10.6667ZM13.9999 15.6667C13.6702 15.6667 13.348 15.5689 13.0739 15.3858C12.7998 15.2026 12.5862 14.9423 12.4601 14.6378C12.3339 14.3333 12.3009 13.9981 12.3652 13.6748C12.4295 13.3515 12.5883 13.0546 12.8214 12.8215C13.0545 12.5884 13.3514 12.4297 13.6747 12.3654C13.998 12.301 14.3331 12.334 14.6377 12.4602C14.9422 12.5863 15.2025 12.8 15.3857 13.074C15.5688 13.3481 15.6665 13.6704 15.6665 14C15.6665 14.442 15.491 14.8659 15.1784 15.1785C14.8658 15.4911 14.4419 15.6667 13.9999 15.6667Z" fill="white" fillOpacity="0.97"/>
                                    </svg>
                                </div>
                                <div className={cls.iconBcg}>
                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8001 2.16666C14.9167 1.281 13.7457 0.740446 12.4987 0.642637C11.2516 0.544829 10.0107 0.896217 9.00007 1.63333C7.93978 0.844693 6.62006 0.487088 5.30667 0.632527C3.99327 0.777965 2.78377 1.41564 1.92171 2.41715C1.05966 3.41866 0.609085 4.7096 0.660734 6.03001C0.712383 7.35042 1.26242 8.60222 2.20007 9.53333L7.37507 14.7167C7.80842 15.1431 8.39206 15.3822 9.00007 15.3822C9.60808 15.3822 10.1917 15.1431 10.6251 14.7167L15.8001 9.53333C16.7731 8.55438 17.3192 7.23022 17.3192 5.85C17.3192 4.46977 16.7731 3.14561 15.8001 2.16666ZM14.6251 8.38333L9.45007 13.5583C9.39118 13.6178 9.32109 13.665 9.24385 13.6972C9.16661 13.7294 9.08375 13.746 9.00007 13.746C8.91638 13.746 8.83352 13.7294 8.75628 13.6972C8.67904 13.665 8.60896 13.6178 8.55007 13.5583L3.37507 8.35833C2.72153 7.69028 2.35558 6.79288 2.35558 5.85833C2.35558 4.92377 2.72153 4.02637 3.37507 3.35833C4.04103 2.70082 4.93921 2.33214 5.87507 2.33214C6.81092 2.33214 7.7091 2.70082 8.37507 3.35833C8.45254 3.43644 8.5447 3.49843 8.64625 3.54074C8.7478 3.58305 8.85672 3.60483 8.96673 3.60483C9.07674 3.60483 9.18567 3.58305 9.28721 3.54074C9.38876 3.49843 9.48093 3.43644 9.5584 3.35833C10.2244 2.70082 11.1225 2.33214 12.0584 2.33214C12.9943 2.33214 13.8924 2.70082 14.5584 3.35833C15.2209 4.01762 15.5989 4.91015 15.6114 5.84473C15.6238 6.77931 15.2698 7.68161 14.6251 8.35833V8.38333Z" fill="white" fillOpacity="0.97"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={cls.cardFooterInfo}>
                            <div className="cardPrice">
                                <h3 className={cls.price}>${price}</h3>
                            </div>
                            <div className="cardTitle">
                                <h1 className={cls.productTitle}>{name}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{clipPath: onCardHover ? 'inset(0 0 0% 0)' :  'inset(0 0 100% 0)'}}
                    data-test={'card-select-menu'}
                    onMouseLeave={setCardHoverOption.bind(this, false)}
                    onMouseEnter={setCardHoverOption.bind(this, true)}
                    className={cls.cardSelectMenu}>
                    <div className={`${cls.cardSelectCircleContainer} firstSliderContainer`}>
                        <Slider {...swipeSliderOptions(6)}>
                            {sliderOptions.firstSliderParams.map((clr, index) => <div key={index + clr}>
                                <div data-test={'circle'} className={index === activeCircle ? cls.activeCircle : null}>
                                    <div style={{backgroundColor: clr}} onClick={() => setActiveCircle(index)}
                                         className={cls.colorCircleSelect}>
                                    </div>
                                </div>
                            </div>)}
                        </Slider>
                    </div>
                    <div className={cls.cardSelectSize}>
                        <div className={`${cls.cardSelectSizeContainer} secondSliderContainer`}>
                            <Slider {...swipeSliderOptions(4)}>
                                {sliderOptions.secondSliderParams.map((size, index) => <div key={index + size}>
                                    <div data-test={'size'} className={index === selectSize ? cls.activeSize : ''}>
                                        <div style={{color: 'white'}} onClick={() => setSelectSize(index)}
                                             className={cls.sizeSelect}>
                                            {size}
                                        </div>
                                    </div>
                                </div>)}
                            </Slider>
                        </div>
                        <div className="buyContainer">
                            <div className={cls.buyIcon}>
                                <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3333 4.33334H10.8333V3.50001C10.8333 2.61595 10.4821 1.7681 9.85694 1.14298C9.23182 0.517861 8.38397 0.166672 7.49992 0.166672C6.61586 0.166672 5.76802 0.517861 5.1429 1.14298C4.51777 1.7681 4.16658 2.61595 4.16658 3.50001V4.33334H1.66659C1.44557 4.33334 1.23361 4.42114 1.07733 4.57742C0.921049 4.7337 0.833252 4.94566 0.833252 5.16667V14.3333C0.833252 14.9964 1.09664 15.6323 1.56549 16.1011C2.03433 16.5699 2.67021 16.8333 3.33325 16.8333H11.6666C12.3296 16.8333 12.9655 16.5699 13.4344 16.1011C13.9032 15.6323 14.1666 14.9964 14.1666 14.3333V5.16667C14.1666 4.94566 14.0788 4.7337 13.9225 4.57742C13.7662 4.42114 13.5543 4.33334 13.3333 4.33334ZM5.83325 3.50001C5.83325 3.05798 6.00885 2.63405 6.32141 2.32149C6.63397 2.00893 7.05789 1.83334 7.49992 1.83334C7.94195 1.83334 8.36587 2.00893 8.67843 2.32149C8.99099 2.63405 9.16658 3.05798 9.16658 3.50001V4.33334H5.83325V3.50001ZM12.4999 14.3333C12.4999 14.5544 12.4121 14.7663 12.2558 14.9226C12.0996 15.0789 11.8876 15.1667 11.6666 15.1667H3.33325C3.11224 15.1667 2.90028 15.0789 2.744 14.9226C2.58772 14.7663 2.49992 14.5544 2.49992 14.3333V6.00001H4.16658V6.83334C4.16658 7.05435 4.25438 7.26631 4.41066 7.42259C4.56694 7.57887 4.7789 7.66667 4.99992 7.66667C5.22093 7.66667 5.43289 7.57887 5.58917 7.42259C5.74545 7.26631 5.83325 7.05435 5.83325 6.83334V6.00001H9.16658V6.83334C9.16658 7.05435 9.25438 7.26631 9.41066 7.42259C9.56694 7.57887 9.7789 7.66667 9.99992 7.66667C10.2209 7.66667 10.4329 7.57887 10.5892 7.42259C10.7455 7.26631 10.8333 7.05435 10.8333 6.83334V6.00001H12.4999V14.3333Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShopCard.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    isAvailable: PropTypes.bool.isRequired,
    sliderOptions: PropTypes.shape({
        firstSliderParams: PropTypes.array.isRequired,
        secondSliderParams: PropTypes.array.isRequired,
    })
}

export default ShopCard;