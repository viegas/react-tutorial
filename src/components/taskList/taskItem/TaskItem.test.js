import TaskItem from './TaskItem';

it('renders correctly', () => {
    const wrapper = shallow(
        <TaskItem text={'some text'} id={123} onRemoveItem={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
});
