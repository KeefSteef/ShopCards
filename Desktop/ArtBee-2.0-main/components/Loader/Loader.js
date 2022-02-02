import React from 'react';
import {useDispatch} from "react-redux";
import {hideLoader} from "../../redux/reducers/actions/generalActions";
import Image from "next/image";
import cls from '../../styles/Loader.module.sass'
import {motion} from "framer-motion";

const Loader = ({ loaderToggle }) => {

    const dispatch = useDispatch()

    return (
        <motion.div animate={{opacity: 0}} transition={{delay: 1.5, duration: 1.2}} onAnimationComplete={() => dispatch(hideLoader())} className={cls.loader}>
            <div className={cls.loaderContainer}>
                <motion.div animate={{opacity: 1}} transition={{delay: 0.3, duration:0}} className={cls.loaderGif}>
                    <Image quality={100} width={150} height={150} src={'/Loading.gif'}/>
                </motion.div>
                <div className={cls.loaderBar}>
                    <div className={cls.progressBar}>
                        <div className={cls.runner}/>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;