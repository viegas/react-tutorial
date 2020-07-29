import Input from './Input';

it('renders correctly', () => {
    const wrapper = shallow(
        <Input onSelectAll={() => {}} onCreateTodo={() => {}} />
    );

    expect(wrapper).toMatchSnapshot();
});

// it('Component should handle onChange function', () => {
//     const wrapper = shallow(<Input />);

//     const evt = {
//         target: {
//             value: 'Some Value',
//         },
//     };

//     wrapper.find('input').simulate('change', evt);

//     expect(wrapper.find('input').prop('value')).toEqual('Some Value')
//     expect(wrapper).toMatchSnapshot();

// });
