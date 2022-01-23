import React, {useState} from 'react';
import ShopCard from "./Components/ShopCard/ShopCard";
import cls from './App.module.sass'

const App = () => {

    const [dataOfCard, setDataOfCard] = useState([
        {
         name: 'Soho Coat',
         price: 301.88,
         isAvailable: true,
         sliderOptions: {
             firstSliderParams: ['#DD7878','#C31212','#63903F','#3D8CAE','#FBAC5A', '#63903F','#3D8CAE','#FBAC5A'],
             secondSliderParams: ['XS','S','M','L','XL','XXL','XS','S','M','L','XL','XXL']
         }

        },
        {
            name: 'Soho Coat',
            price: 301.88,
            isAvailable: true,
            sliderOptions: {
                firstSliderParams: ['#DD7878','#C31212','#63903F','#3D8CAE','#FBAC5A', '#63903F','#3D8CAE','#FBAC5A'],
                secondSliderParams: ['XS','S','M','L','XL','XXL','XS','S','M','L','XL','XXL']
            }

        },
        {
            name: 'Soho Coat',
            price: 301.88,
            isAvailable: true,
            sliderOptions: {
                firstSliderParams: ['#DD7878','#C31212','#63903F','#3D8CAE','#FBAC5A', '#63903F','#3D8CAE','#FBAC5A'],
                secondSliderParams: ['XS','S','M','L','XL','XXL','XS','S','M','L','XL','XXL']
            }

        },
        {
            name: 'Soho Coat',
            price: 301.88,
            isAvailable: false,
            sliderOptions: {
                firstSliderParams: ['#DD7878','#C31212','#63903F','#3D8CAE','#FBAC5A', '#63903F','#3D8CAE','#FBAC5A'],
                secondSliderParams: ['XS','S','M','L','XL','XXL','XS','S','M','L','XL','XXL']
            }

        }
    ])

    return (
        <div className={cls.wrapper}>
            <div data-test={'list-of-cards'} className={cls.listOfCards}>
                {dataOfCard.map((card, index) => {
                    const {name, price, isAvailable, sliderOptions} = card;
                    return <ShopCard key={name + index} name={name} isAvailable={isAvailable} price={price} sliderOptions={sliderOptions}  />
                })}
            </div>
        </div>
    );
};

export default App;