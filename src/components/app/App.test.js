import App from './App';
import nock from 'nock';

import useTodoHooks from './App.hooks';
import { shallow } from 'enzyme';
import { wait } from '@testing-library/react';

describe('App render tests', () => {
    it('renders correctly on loading data', () => {
        nock('http://localhost:8978')
            .get('/todos')
            .reply(200, [
                {
                    text: 'todoText',
                    id: 1,
                },
            ]);
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should find the intern components', async () => {
        nock('http://localhost:8978')
            .get('/todos')
            .reply(200, [
                {
                    text: 'todoText',
                    id: 1,
                },
                {
                    text: 'todoText',
                    id: 1,
                },
            ]);

        // const wrapper = shallow(<App />);
        let wrapper;
        wrapper = shallow(<App />);

        await wait(() => {
            expect(wrapper.find('Title')).toHaveLength(1);
            expect(wrapper.find('Input')).toHaveLength(1);
            expect(wrapper.find('TaskList')).toHaveLength(1);
            expect(wrapper.find('Footer')).toHaveLength(1);
            expect(wrapper).toMatchSnapshot();
        });
    });
});

describe('App hooks test', () => {
    let setValue;

    beforeEach(() => {
        setValue = jest.fn();
    });

    it('Should call useCreateTodo correctly', async () => {
        const todoText = 'new todo text';

        nock('http://localhost:8978')
            .post('/todos')
            .reply(200)
            .get('/todos')
            .reply(200, [
                {
                    text: todoText,
                    id: 1,
                },
            ]);

        const { useCreateTodo } = useTodoHooks([], setValue);
        await useCreateTodo(todoText);

        expect(setValue).toHaveBeenCalledTimes(2);

        expect(setValue).toHaveBeenNthCalledWith(
            1,
            expect.arrayContaining([
                {
                    text: todoText,
                    id: expect.any(Number),
                    disabled: true,
                },
            ])
        );

        expect(setValue).toHaveBeenNthCalledWith(
            2,
            expect.arrayContaining([
                {
                    text: todoText,
                    id: expect.any(Number),
                },
            ])
        );
    });

    it('Should handle cancel token correctly', async () => {
        nock('http://localhost:8978')
            .persist()
            .post('/todos')
            .reply(200)
            .get('/todos')
            .delayConnection(1000)
            .reply(200, [
                {
                    text: 'todoText',
                    id: 1,
                },
            ]);

        const { useCreateTodo } = useTodoHooks([], setValue);
        useCreateTodo('todoText');
        await useCreateTodo('todoText2');

        expect(setValue).toHaveBeenCalledTimes(2);
    });

    it('Should call useUpdateTodo correctly', () => {
        nock('http://localhost:8978').patch('/todos/0').reply(200);

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
        nock('http://localhost:8978').delete('/todos/0').reply(200, {});

        const { useRemoveTodo } = useTodoHooks(
            [{ id: 0, text: 'todo' }],
            setValue
        );
        useRemoveTodo(0);
        expect(setValue).toBeCalledWith([]);
    });
});
