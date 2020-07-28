import React from 'react';
import styles from './App.module.css';

import Title from '../title/Title';
import Input from '../input/Input';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';

const App = ({ titulo }) => {
    return (
        <div className={styles.app}>
            <Title />
            <Input />
            <TaskList />
            <Footer />
        </div>
    );
};

export default App;
