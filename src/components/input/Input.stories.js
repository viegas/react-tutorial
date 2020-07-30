import React from 'react';
import Input from './Input';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Components',
    component: Input,
};

export const storyInput = () => (
    <Input
        onCreateTodo={action('onCreateTodo')}
        onSelectAll={action('onSelectAll')}
    />
);

storyInput.story = {
    name: 'Input',
};
