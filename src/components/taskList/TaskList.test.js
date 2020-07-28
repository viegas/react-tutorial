import TaskList from './TaskList';

it('renders correctly', () => {
    const wrapper = shallow(<TaskList />);

    expect(wrapper).toMatchSnapshot();
});
