import Title from './Title';

it('renders correctly', () => {
    const wrapper = shallow(<Title />);
    expect(wrapper).toMatchSnapshot();
});
