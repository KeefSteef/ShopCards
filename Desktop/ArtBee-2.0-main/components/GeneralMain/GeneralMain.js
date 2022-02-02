import cls from '../../styles/GeneralMain.module.sass'
import GeneralHome from "../GeneralHome/GeneralHome";
import GeneralCategoryList from "../GeneralCategoryList/GeneralCategoryList";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import {useRef} from "react";
import GeneralPreContent from "../GeneralPreContent/GeneralPreContent";
import GeneralGreyBoard from "../GeneralGreyBoard/GeneralGreyBoard";
import GeneralListOfRecommendArts from "../GeneralListOfRecommendArts/GeneralListOfRecommendArts";
import GeneralAuctionList from "../GeneralAuctionList/GeneralAuctionList";
import GeneralContacts from "../GeneralContacts/GeneralContacts";


const GeneralMain = () => {
    const containerRef = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={
                {
                    direction: 'horizontal',
                    lerp: 0.15,
                    smooth: true,
                }
            }
            containerRef={containerRef}
        >
            <div className={cls.generalMainSection}>
               <div data-scroll-container className={cls.scrollContainer}>
                   <div data-scroll-section>
                       <GeneralHome/>
                   </div>
                   <div data-scroll-section>
                       <GeneralGreyBoard/>
                   </div>
                   <div data-scroll-section>
                       <GeneralCategoryList/>
                   </div>
                   <div data-scroll-section>
                      <GeneralPreContent firstSenctence={'Artbee'} secondSentence={'рекомендує'}/>
                   </div>
                   <div data-scroll-section>
                       <GeneralListOfRecommendArts/>
                   </div>
                   <div data-scroll-section>
                       <GeneralGreyBoard/>
                   </div>
                   <div data-scroll-section>
                       <GeneralListOfRecommendArts/>
                   </div>
                   <div data-scroll-section>
                       <GeneralPreContent titleIsColor={false} firstSenctence={'Актуальні'} secondSentence={'події'}/>
                   </div>
                   <div data-scroll-section>
                       <GeneralAuctionList/>
                   </div>
                   <div data-scroll-section>
                       <GeneralGreyBoard/>
                   </div>
                   <div data-scroll-section>
                       <GeneralContacts/>
                   </div>
               </div>
            </div>
        </LocomotiveScrollProvider>
    );
};


export default GeneralMain;