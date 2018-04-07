import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

global.shallow = shallow;

window.matchMedia = window.matchMedia || (() => { 
  return { 
    matches: false, 
    addListener: () => { }, 
    removeListener: () => { }, 
  }; 
});

require('../../../src/app/polyfills/node-fetch');


