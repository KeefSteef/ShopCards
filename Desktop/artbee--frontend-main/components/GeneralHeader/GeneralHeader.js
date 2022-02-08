import Image from "next/image";
import cls from './GeneralHeader.module.sass'
import {toggleShowMenu} from "../../redux/reducers/actions/generalActions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const GeneralHeader = () => {

    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.global.isLogged);

    return (
        <div className={cls.navbar}>
            <nav className={cls.nav}>
                <div className={cls.logo}>
                    <Image width={94} height={50} src={'/logo.svg'}/>
                </div>
                <div className={cls.btnContainer}>
                    {!isLogged ?
                        <>
                            <p className={cls.enterBtn}>Вхід</p>
                            <p className={cls.regBtn}>Реєстрація</p>
                        </>
                        :

                        <>
                            <div className={cls.headerIcon}>
                                <Image width={25} height={25} src={'/Group.svg'}/>
                            </div>
                            <div className={cls.headerIcon}>
                                <Image width={25} height={25} src={'/msg.svg'}/>
                            </div>
                            <div className={cls.headerIcon}>
                                <Image width={30} height={30} src={'/profile.svg'}/>
                            </div>
                        </>
                    }
                </div>
            </nav>
            <div onClick={() => dispatch(toggleShowMenu(true))} className={cls.menuBtnContainer}>
                <div className={cls.menuBtn}>
                    <div className={cls.stick}/>
                    <div className={cls.stick}/>
                    <div className={cls.stick}/>
                    <div className={cls.stick}/>
                </div>
            </div>
        </div>
    );
};

export default GeneralHeader;