import cls from '../../styles/GeneralHome.module.sass'
import Image from "next/image";

const GeneralHome = () => {
    return (
        <div className={cls.generalHomeContainer}>
            <Image className={cls.backImg}
                   layout="fill"
                   objectFit="cover"
                   quality={100}
                   src={'/homeBcg.png'}/>
            <div className={cls.homeInfoContainer}>
               <div className={cls.infoContainer}>
                   <div className={cls.homeInfo}>
                       <h1 className={cls.homeTitle}>Перший арт-лейбл України</h1>
                       <p className="homeText">Місце, в якому об'єднані всі
                           творчі люди, місце натхнення і можливість знайти щось унікальне і незвичайне.
                       </p>
                       <p className="homeSecondText">
                           Ми за просування талановитих діячів мистецтва України по всьому світу.
                       </p>
                   </div>
               </div>
            </div>
        </div>
    );
};



export default GeneralHome;