import cls from '../../styles/GeneralFooter.module.sass'

const GeneralFooter = () => {
    return (
        <div>
            <div className={cls.footer}>
                <div className={cls.footerBtnContainer}>
                    <a href="/">Галерея</a>
                    <a href="/">Аукціон</a>
                </div>
                <div className={cls.doScrollContainer}>
                    <div className={cls.progressBar}>
                        <div className={cls.runner}/>
                    </div>
                    <p>Гортай</p>
                </div>
            </div>
        </div>
    );
};

export default GeneralFooter;