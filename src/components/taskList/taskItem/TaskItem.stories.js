import React from 'react';
import TaskItem from './TaskItem';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Components/Tasks',
    component: TaskItem,
    decorators: [withKnobs],
};

export const storyTaskItem = () => (
    <TaskItem
        text={text('Task text', 'Some text')}
        id={1}
        onRemoveItem={action('onRemoveItem')}
        onUpdateItem={action('onUpdateItem')}
    />
);

storyTaskItem.story = {
    name: 'TaskItem',
};
