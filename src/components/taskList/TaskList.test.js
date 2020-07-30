import TaskList from './TaskList';

it('renders correctly', () => {
    const wrapper = shallow(
        <TaskList
            list={[
                { id: 1, text: 'Some text' },
                { id: 2, text: 'Some other text' },
            ]}
            onRemoveItem={() => {}}
        />
    );
    expect(wrapper.find('TaskItem')).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
});

it('renders correctly with empty list', () => {
    const wrapper = shallow(<TaskList list={[]} onRemoveItem={() => {}} />);

    expect(wrapper.find('TaskItem')).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
});
