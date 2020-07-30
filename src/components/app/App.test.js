import App from './App';
import { mount, render } from 'enzyme';

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

it('Should call onCreateTodo correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onCreateTodo('Novo todo!')

    expect(wrapper.state('todoList')[1].text).toEqual('Novo todo!')
    
});

it('Should call onRemoveItem correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onRemoveItem(0)

    expect(wrapper.state('todoList')).toEqual([])
});

it('Should call onUpdateItem correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().onUpdateItem(0, 'Novo todo editado!')
    
    expect(wrapper.state('todoList')[0].text ).toEqual('Novo todo editado!')

});

it('Should call onUpdateItem with the more than 1 item', () => {
    const wrapper = shallow(<App />);
    
    wrapper.instance().onCreateTodo('Novo todo!')
    wrapper.instance().onUpdateItem(0, 'Novo todo editado!')
    
    expect(wrapper.state('todoList')[0].text ).toEqual('Novo todo editado!')
    expect(wrapper.state('todoList')[1].text ).toEqual('Novo todo!')

});




// it('Should call addValue', () => {
//     const wrapper = shallow(<App init={0} />);

//     wrapper.instance().addValue()

//     console.log(wrapper.state('someState'))

//     expect(wrapper.state('someState')).toEqual(1)

// });
