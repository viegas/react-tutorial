import TaskList from './TaskList';

it('renders correctly', () => {
    const wrapper = shallow(
        <TaskList
            list={[{ id: 123, text: 'Some text' }]}
            onRemoveItem={() => {}}
        />
    );

    expect(wrapper).toMatchSnapshot();
});
