import App from './App';
import nock from 'nock';

import useTodoHooks from './App.hooks';
import { mount } from 'enzyme';
import { act } from 'react-test-renderer';

it('renders correctly on loading data', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});

it('renders correctly with data', () => {
    // nock('http://localhost:8978/')
    //     .get('/todos')
    //     .reply(200, {
    //         data: [
    //             {
    //                 text: 'some todo',
    //                 id: 1,
    //             },
    //         ],
    //     });

    const wrapper = mount(<App />);
    act(() => {
        wrapper.update();
    });

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

    it.only('Should call useCreateTodo correctly', async () => {
        const todoText = 'new todo text';

        nock('http://localhost:8978')
            .get('/todos')
            .reply(200, [
                {
                    text: 'some todo',
                    id: 1,
                },
            ]);

        nock('http://localhost:8978').post('/todos').reply(200);

        const { useCreateTodo } = useTodoHooks([], setValue);
        await useCreateTodo(todoText);

        expect(setValue).toHaveBeenCalledTimes(2);

        expect(setValue).toHaveNthReturnedWith(2, {});
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
