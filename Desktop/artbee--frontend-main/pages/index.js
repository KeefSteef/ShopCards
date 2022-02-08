import {useState} from "react";
import {useSelector} from "react-redux";
import Loader from "../components/Loader/Loader";
import GeneralHeader from "../components/GeneralHeader/GeneralHeader";
import GeneralMain from "../components/GeneralMain/GeneralMain";
import GeneralFooter from "../components/GeneralFooter/GeneralFooter";
import GeneralMenu from "../components/GeneralMenu/GeneralMenu";
import {motion} from "framer-motion";
const Index = () => {

    const showLoaderMenuState = useSelector(state => state.general.showLoader);
    const menuShowToggle = useSelector(state => state.general.showMenuToggle)


    return (
        <>
          <div>
              {showLoaderMenuState && <Loader/>}
              {menuShowToggle && <GeneralMenu/> }
              <GeneralHeader/>
              <GeneralMain/>
              <GeneralFooter/>
          </div>
        </>
    );
};

export default Index;