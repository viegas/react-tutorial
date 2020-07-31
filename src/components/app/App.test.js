import App from './App';

import useTodoHooks from './App.hooks';

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

describe('App hooks test', () => {
    let setValue;

    beforeEach(() => {
        setValue = jest.fn();
    });

    it('Should call useCreateTodo correctly', () => {
        const { useCreateTodo } = useTodoHooks([], setValue);
        useCreateTodo('new todo text');

        expect(setValue).toBeCalledWith(
            expect.arrayContaining([
                {
                    text: 'new todo text',
                    id: expect.any(Number),
                },
            ])
        );
    });

    it('Should call useUpdateTodo correctly', () => {
        const { useUpdateTodo } = useTodoHooks(
            [
                { id: 0, text: 'todo' },
                { id: 1, text: 'other' },
            ],
            setValue
        );
        
        useUpdateTodo(0, 'Updated');
        expect(setValue).toBeCalledWith([
            { id: 0, text: 'Updated' },
            { id: 1, text: 'other' },
        ]);
    });

    it('Should call useRemoveTodo correctly', () => {
        const { useRemoveTodo } = useTodoHooks(
            [{ id: 0, text: 'todo' }],
            setValue
        );
        useRemoveTodo(0);
        expect(setValue).toBeCalledWith([]);
    });
});
