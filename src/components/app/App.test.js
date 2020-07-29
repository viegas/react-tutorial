import App from './App';
import { mount, render } from 'enzyme'

// import Title from '../title/Title';
// import Input from '../input/Input';
// import TaskList from '../taskList/TaskList';
// import Footer from '../footer/Footer';

it('renders correctly', () => {
    const wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
});

it('Should find the intern components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find('Title')).toHaveLength(1);
    expect(wrapper.find('Input')).toHaveLength(1);
    expect(wrapper.find('TaskList')).toHaveLength(1);
    expect(wrapper.find('Footer')).toHaveLength(1);
});

// it('Should call addValue', () => {
//     const wrapper = shallow(<App init={0} />);

//     wrapper.instance().addValue()

//     console.log(wrapper.state('someState'))

//     expect(wrapper.state('someState')).toEqual(1)

   
// });
