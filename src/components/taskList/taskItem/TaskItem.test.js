import TaskItem from './TaskItem';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

describe('Simple tests', () => {
    let onRemoveItem;
    let onUpdateItem;
    let wrapper;
    beforeEach(() => {
        onRemoveItem = jest.fn();
        onUpdateItem = jest.fn();

        wrapper = shallow(
            <TaskItem
                id={1}
                text={'Some text'}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
            />
        );
    });

    it('renders correctly', () => {
        console.log(wrapper.instance());
        expect(wrapper).toMatchSnapshot();
    });

    it('Should call onRemoveItem correctly', () => {
        wrapper.find('button').simulate('click');

        expect(onRemoveItem).toBeCalledWith(1);
        expect(wrapper).toMatchSnapshot();
    });

    it('Should renders correctly the input', () => {
        wrapper.find('span').simulate('dblclick');

        const input = wrapper.find('input');
        const span = wrapper.find('span');

        expect(input).toHaveLength(1);
        expect(span).toHaveLength(0);

        expect(wrapper).toMatchSnapshot();
    });

    it('Should change the value of the input correctly', () => {
        wrapper.find('span').simulate('dblclick');

        const event = {
            target: {
                value: 'some value',
            },
        };
        wrapper.find('input').simulate('change', event);

        expect(wrapper.find('input').props().value).toBe(event.target.value);
    });

    it('Should call keyPress function correctly', () => {
        wrapper.find('span').simulate('dblclick');

        let input = wrapper.find('input[type="text"]');

        input.simulate('keypress', {
            key: '13',
        });

        expect(onUpdateItem).not.toBeCalledWith(1, 'Some text');

        input.simulate('keypress', {
            key: 'Enter',
            target: {
                value: 'test',
            },
        });

        expect(onUpdateItem).toBeCalledWith(1, 'Some text');
    });
});

describe('Click event tests', () => {
    const createDocumentListenersMock = () => {
        const listeners = {};
        const handler = (domEl, event) =>
            listeners?.[event]?.({ target: domEl });
        document.addEventListener = jest.fn((event, cb) => {
            listeners[event] = cb;
        });
        document.removeEventListener = jest.fn((event) => {
            delete listeners[event];
        });
        return {
            mouseDown: (domEl) => handler(domEl, 'mousedown'),
            click: (domEl) => handler(domEl, 'click'),
        };
    };

    let onRemoveItem;
    let onUpdateItem;
    let wrapper;
    const fireEvent = createDocumentListenersMock();

    beforeEach(() => {
        onRemoveItem = jest.fn();
        onUpdateItem = jest.fn();

        wrapper = mount(
            <TaskItem
                id={1}
                text={'Some text'}
                onRemoveItem={onRemoveItem}
                onUpdateItem={onUpdateItem}
            />
        );

        wrapper.find('span').simulate('dblclick');
    });

    it('Test click outside the component', () => {
        act(() => {
            fireEvent.click(document.body);
        });

        wrapper.update();

        const input = wrapper.find('input');
        const span = wrapper.find('span');

        expect(input).toHaveLength(0);
        expect(span).toHaveLength(1);
    });

    it('Test the click inside the component', () => {
        act(() => {
            fireEvent.click(wrapper.find('input').instance());
        });

        wrapper.update();

        const input = wrapper.find('input');
        const span = wrapper.find('span');

        expect(input).toHaveLength(1);
        expect(span).toHaveLength(0);
    });
});
