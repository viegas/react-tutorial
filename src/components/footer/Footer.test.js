import Footer from './Footer';

it('renders correctly', () => {
    const wrapper = shallow(<Footer />);

    expect(wrapper).toMatchSnapshot();
});
