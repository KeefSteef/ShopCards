import {useState} from 'react';
import Image from "next/image";
import {useDispatch} from "react-redux";
import cls from '../../styles/GeneralMenu.module.sass'
import {motion} from "framer-motion";
import {toggleShowMenu} from "../../redux/reducers/actions/generalActions";

const GeneralMenu = () => {

    const [currentVariant, setCurrentVariant] = useState('fadeIn');
    const dispatch = useDispatch()
    const variants = {
        fadeIn: {
            opacity: 1
        },
        fadeOut: {
            opacity: 0
        }
    }

    return (
        <div>
            <motion.div variants={variants} onAnimationComplete={() => currentVariant === 'fadeOut' ? dispatch(toggleShowMenu(false)) : false} animate={currentVariant} transition={{duration: 1}} className={cls.generalMenuContainer}>
                <div className={cls.menuHeaderContainer}>
                    <nav className={cls.menuHeaderNavbar}>
                        <div className={cls.navbarBrandIcon}>
                            <Image width={100} height={70} src={'/whiteLogo.svg'}/>
                        </div>
                        <div onClick={() => setCurrentVariant('fadeOut')} className={cls.navbarCloseIcon}>
                            <Image width={30} height={30} src={'/cross.svg'}/>
                        </div>
                    </nav>
                </div>
                <div className={cls.menuMainContainer}>
                    <div className={cls.menuGreetingsInfoContainer}>
                        <div className={cls.imgContainer}>
                            <Image className={cls.noiseBcg} layout={'fill'}  src={'/oise.png'}/>
                        </div>
                        <div className={cls.menuGreetingsInfo}>
                            <div className={cls.greetingsText}>
                                <h1>Вітаємо</h1>
                                <p>Artbee - стартап за просування талановитих діячів мистецтва України по всьому світу.
                                </p>
                            </div>
                            <div className={cls.greetingsContacts}>
                                <div className={cls.greetingsMail}>
                                    <a href="" className="email">artbee.gallery@gmail.com</a>
                                </div>
                                <div className={cls.greetingsPhoneContacts}>
                                    <p>+38 099 987 65 43</p>
                                    <p>+38 095 345 67 89</p>
                                </div>
                                <div className={cls.greetingsStreet}>
                                    <p>ул.Распрекрасная , 27</p>
                                    <p>г.Грехов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className={cls.menuSelectContainer}>
                            <Image className={cls.noiseBcg} layout={'fill'}  src={'/noise.png'}/>
                            <div className={cls.menuSelectInfoContainer}>
                                <div className={cls.menuSelectInfo}>
                                    <div className={cls.selectInfo}>
                                        <h2>Головна</h2>
                                        <h2>Послуги</h2>
                                        <h2>Галерея</h2>
                                        <h2>NFT</h2>
                                    </div>
                                </div>
                                <div className={cls.menuSelectInfo}>
                                    <div className={cls.selectInfo}>
                                        <h2>Аукціон</h2>
                                        <h2>Митці</h2>
                                        <h2>FAQ</h2>
                                        <h2>Контакти</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </motion.div>
        </div>
    );
};

export default GeneralMenu;











