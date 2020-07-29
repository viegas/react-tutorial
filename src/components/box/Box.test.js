import Box from './Box';

it('renders correctly', () => {
    const wrapper = shallow(<Box>Some children</Box>);

    expect(wrapper).toMatchSnapshot();
});
