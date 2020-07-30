import Input from './Input';

it('renders correctly', () => {
    const wrapper = shallow(
        <Input onSelectAll={() => {}} onCreateTodo={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
});

it('Should call keyPress function', () => {
    // const onSelectAll = jest.fn()
    const onCreateTodo = jest.fn();

    const wrapper = shallow(<Input onCreateTodo={onCreateTodo} />);

    let input = wrapper.find('input[type="text"]');

    input.simulate('keypress', {
        key: 'Enter',
        target: {
            value: 'test',
        },
    });

    expect(onCreateTodo).toBeCalledWith('test');
});

it('Should call keyPress function on else statement', () => {
    // const onSelectAll = jest.fn()
    const onCreateTodo = jest.fn();

    const wrapper = shallow(<Input onCreateTodo={onCreateTodo} />);

    let input = wrapper.find('input[type="text"]');

    input.simulate('keypress', {
        key: '13',
        target: {
            value: 'test',
        },
    });

    expect(onCreateTodo).not.toBeCalled();
});

it('Should call onSelectAll function when click the checkbox', () => {
    const onCreateTodo = jest.fn();
    const spy = jest.spyOn(Input.defaultProps, 'onSelectAll');

    const wrapper = shallow(<Input onCreateTodo={onCreateTodo} />);
    wrapper.find('input[type="checkbox"]').simulate('click', 'test');
    

    expect(spy).toBeCalledWith('test');

    // const result = Input.defaultProps.onSelectAll('123')
    // expect(result).toBe('123')
});

