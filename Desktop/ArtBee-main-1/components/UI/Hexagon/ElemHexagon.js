import React from 'react';
import cls from '../../../styles/Hexagon.module.scss'
import Image from "next/image";

const ElemHexagon = ({ bcgImage = false, text = 'art', isRotate = false}) => {
    return (
        <div className={cls.elemHex}>
            <Image className={cls.hexagonImg} quality={100} width={215} height={250} layout={"intrinsic"} src={bcgImage}/>
            <p className={cls.hexagonTitle}>{text}</p>
        </div>
    );
};

export default ElemHexagon;

