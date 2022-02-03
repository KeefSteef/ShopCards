import React from 'react';
import cls from '../../styles/GeneralCategoryList.module.sass'
import Image from "next/image";
import ElemHexagon from "../UI/Hexagon/ElemHexagon";

const GeneralCategoryList = () => {
    return (
        <div className={cls.categoryListContainer}>
            <Image className={cls.backImgFirst} layout={'fill'} src={'/categoryBack1.png'} />
            <div className={cls.choiceCategoriesContainer}>
                <div className={cls.choiceTitle}>
                    <h2>Обрані категорії</h2>
                </div>
                <div className={cls.choiceCategories}>
                    <div className={cls.choiceCategoriesFirstRow}>
                        <ElemHexagon bcgImage={'/absImg.png'} text={'Абстракция'}/>
                        <ElemHexagon bcgImage={'/impress.png'} text={'Импрессионизм'}/>
                        <ElemHexagon bcgImage={'/modern.png'} text={'21-век'}/>
                    </div>
                    <div className={cls.choiceCategoriesSecondRow}>
                        <ElemHexagon bcgImage={'/surrerealism.png'} text={'Сюрреализм'}/>
                        <ElemHexagon bcgImage={'/art.png'} text={'Портрет'}/>
                        <ElemHexagon bcgImage={'/symbol.png'} text={'Символизм  '}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralCategoryList;