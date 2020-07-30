import React from 'react';
import TaskList from './TaskList';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs';

export default {
    title: 'Components/Tasks',
    component: TaskList,
    decorators: [withKnobs],
};

const defaultList = [
    { id: 0, text: 'My first todo' },
    { id: 1, text: 'My other todo' },
];

export const storyTaskList = () => (
    <TaskList
        list={object('Task list', defaultList)}
        onRemoveItem={action('onRemoveItem')}
        onUpdateItem={action('onUpdateItem')}
    />
);

storyTaskList.story = {
    name: 'TaskList',
};
