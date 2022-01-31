import React from 'react';
import cls from "../../styles/GeneralCategoryList.module.sass";

const GeneralGreyBoard = () => {
    return (
    <>
        <div className={"categoryListBorder"}/>
            <style jsx>{`
            .categoryListBorder {
              width: 300px;
              height: 100vh;
              background: #DADADA;
            }
          `}</style>

        );
    </>
    )
};

export default GeneralGreyBoard;