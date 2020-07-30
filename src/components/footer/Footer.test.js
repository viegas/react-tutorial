import Footer from './Footer';

it('renders correctly when empty', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});

it('renders correctly with size', () => {
    const size = 1;
    const wrapper = shallow(<Footer size={size} />);

    expect(wrapper.find('span').text()).toBe(`Items left: ${size}`);
    expect(wrapper).toMatchSnapshot();

});
