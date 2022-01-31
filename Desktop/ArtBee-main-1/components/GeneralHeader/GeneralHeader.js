import Image from "next/image";
import cls from '../../styles/GeneralHeader.module.sass'

const GeneralHeader = () => {
    return (
        <div className={cls.navbar}>
            <nav className={cls.nav}>
                <div className={cls.logo}>
                    <Image width={94} height={50} src={'/logo.svg'}/>
                </div>
                <div className={cls.btnContainer}>
                    <a href={'/'} className={cls.enterBtn}>Вхід</a>
                    <a href={'/'} className={cls.regBtn}>Реєстрація</a>
                </div>
            </nav>
            <div className={cls.menuBtnContainer}>
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