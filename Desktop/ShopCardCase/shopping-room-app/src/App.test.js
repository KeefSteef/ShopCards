import {render} from "enzyme";
import {findByArgument} from "./Utils/TestUtils/testUtils";
import App from "./App";

describe('Rendering testing', () => {
    const setup = () => render(<App />)

    test('Should return 4 cards', () => {
        const wrapper = setup();
        const countOfCards = findByArgument(wrapper, 'list-of-cards').children().length;
        expect(countOfCards).toBe(4);
    })

    test('1 card should not be available', () => {
        const wrapper = setup()
        const countOfCards = findByArgument(wrapper, 'list-of-cards')

        expect(countOfCards.text().includes('Out of stock')).toBe(true);

    })
})