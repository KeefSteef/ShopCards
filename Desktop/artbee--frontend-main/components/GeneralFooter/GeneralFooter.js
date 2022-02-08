import cls from './GeneralFooter.module.sass'

const GeneralFooter = () => {
    return (
        <div>
            <div className={cls.footer}>
                <div className={cls.footerBtnContainer}>
                    <button>Галерея</button>
                    <button>Аукціон</button>
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