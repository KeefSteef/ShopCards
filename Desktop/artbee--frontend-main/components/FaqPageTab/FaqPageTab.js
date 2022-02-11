import React, {useState, useRef, useEffect, useLayoutEffect} from 'react';
import cls from './FaqPageTab.module.sass'
import {motion} from "framer-motion";

const FaqPageTab = ({ tabTitle, tabDesc }) => {
    const [isActiveTab, setActiveTab] = useState(false)
    const [elementHeight, setElementHeight] = useState(0);
    const elementRef = useRef();

    useEffect(() => {
        const height = elementRef.current.clientHeight
        setElementHeight(height)
    },[])

    return (
        <div className={cls.faqTab}>
            <div className={cls.faqTabContainer}>
                <h4>{tabTitle}</h4>
                <div className={cls.tabToggler} onClick={() => setActiveTab(prev => !prev)}>
                    <span  className="stick"/>
                    <motion.span initial={ {rotate: '90deg'}} animate={isActiveTab ? {rotate: '180deg'} : {rotate: '90deg'}} transition={{duration: 1}}  className="stick"/>
                </div>
            </div>
            <div className={cls.faqTabInfo}>
                <motion.div className={cls.faqTabInfoContainer}>
                     <motion.p ref={elementRef} animate={ isActiveTab ? {opacity: 1, maxHeight: `${elementHeight}px`, marginTop:60} : {marginTop: 0, opacity: 0, maxHeight: '50px'}} transition={{duration: 1}}>{ tabDesc }</motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default FaqPageTab;