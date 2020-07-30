import React from 'react';
import Footer from './Footer';
import { withKnobs, number } from '@storybook/addon-knobs';

export default {
    title: 'Components',
    component: Footer,
    decorators: [withKnobs],
};

export const storyFooter = () => <Footer size={number('Size', 1)} />;

storyFooter.story = {
    name: 'Footer',
};
