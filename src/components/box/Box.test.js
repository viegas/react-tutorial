import Box from './Box';

it('renders correctly', () => {
    const wrapper = shallow(<Box />);
    
    expect(wrapper.find('p')).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
});

it('renders correctly with children', () => {
    const wrapper = shallow(
        <Box>
            <p>Some children</p>
        </Box>
    );

    expect(wrapper.find('p')).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
});
