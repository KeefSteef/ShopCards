import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new EnzymeAdapter()})

global.matchMedia = global.matchMedia || function() {
    return {
        matches : false,
        addListener : function() {},
        removeListener: function() {}
    }
}