import React from 'react';
import Box from './Box';

export default {
    title: 'Components',
    component: Box,
};

export const storyBox = () => (
    <Box>
        <p>Some children</p>
    </Box>
);

storyBox.story = {
    name: 'Box',
};
