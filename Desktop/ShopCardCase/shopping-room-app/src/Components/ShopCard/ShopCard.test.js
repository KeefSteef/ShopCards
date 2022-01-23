import ShopCard from "./ShopCard";
import {shallow} from 'enzyme';
import {elementStyleCheck, findByArgument} from "../../Utils/TestUtils/testUtils";
import checkPropTypes from "check-prop-types";

describe('Rendering and default state testing', () => {

    const expectedProps = {
        name: 'T-shirt',
        price: 400,
        isAvailable: true,
        sliderOptions: {
            firstSliderParams: ['#DD7878','#C31212','#63903F','#3D8CAE','#FBAC5A', '#63903F','#3D8CAE','#FBAC5A'],
            secondSliderParams: ['XS','S','M','L','XL','XXL','XS','S','M','L','XL','XXL']
        }
    }


    const setup = (props = {}) => shallow(<ShopCard {...props} />);

    let wrapper

    beforeEach(() => {
        wrapper = setup(expectedProps)
    })

    test('Main card container successfully rendered', () => {
        const containerCard = findByArgument(wrapper, 'card-container');
        expect(containerCard).toBeDefined();
        expect(containerCard.length).toBe(1);
    })


    test('Default state icons is hidden as opacity 0 ', () => {
        const icons = findByArgument(wrapper, 'card-icons');
        expect(icons.length).toBe(1);
        expect(elementStyleCheck(icons)).toHaveProperty('opacity', 0);
    })


    test('Default state menu is hidden as clip-path: 100% ', () => {
        const selectMenu = findByArgument(wrapper, 'card-select-menu');
        expect(selectMenu.length).toBe(1);

        expect(elementStyleCheck(selectMenu)).toHaveProperty('clipPath', "inset(0 0 100% 0)");
    })

    test('Circles should not contain active class', () => {
        const circles = findByArgument(wrapper, 'circle');
        expect(circles.debug()).not.toContain('activeCircle')
    })

    test('Sizes should not contain active class', () => {
        const sizes = findByArgument(wrapper, 'size');
        expect(sizes.debug()).not.toContain('activeSize')
    })

})

describe('Props testing', () => {

    const expectedProps = {
        name: 'T-shirt',
        price: 400,
        isAvailable: true,
        sliderOptions: {
            firstSliderParams: ['#DD7878','#C31212','#63903F','#3D8CAE','#FBAC5A', '#63903F','#3D8CAE','#FBAC5A'],
            secondSliderParams: ['XS','S','M','L','XL','XXL','XS','S','M','L','XL','XXL']
        }
    }

    const setup = (props = {}) => shallow(<ShopCard {...props} />);

    test('Should not throw warning', () => {
        const propsErr = checkPropTypes(ShopCard.propTypes, expectedProps, 'props', ShopCard.name);
        expect(propsErr).toBeUndefined()

    })
})