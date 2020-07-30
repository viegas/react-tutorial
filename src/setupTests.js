import React from 'react';
import enableHooks from 'jest-react-hooks-shallow';

// pass an instance of jest to `enableHooks()`
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
enableHooks(jest);

global.React = React;
global.shallow = shallow;
