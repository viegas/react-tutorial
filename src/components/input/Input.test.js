import Input from './Input';

it('renders correctly', () => {
    const wrapper = shallow(<Input />);

    expect(wrapper).toMatchSnapshot();
});
