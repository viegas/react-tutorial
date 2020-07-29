import React, { Component } from 'react';
import styles from './App.module.css';

import Title from '../title/Title';
import Input from '../input/Input';
import TaskList from '../taskList/TaskList';
import Footer from '../footer/Footer';
import Box from '../box/Box';

class App extends Component {
    state = {
        todoList: [
            {
                id: 0,
                text: 'My first todo',
            },
        ],
    };

    onCreateTodo = (newTodo) => {
        const { todoList } = this.state;

        this.setState({
            todoList: todoList.concat({ id: Date.now(), text: newTodo }),
        });
    };

    onRemoveItem = (id) => {
        const { todoList } = this.state;

        const newList = todoList.filter((i) => i.id !== id);

        this.setState({
            todoList: newList,
        });
    };

    render() {
        const { todoList } = this.state;

        return (
            <div className={styles.app}>
                <Title />
                <Box>
                    <Input
                        onSelectAll={this.onSelectAll}
                        onCreateTodo={this.onCreateTodo}
                    />
                    <TaskList
                        list={todoList}
                        onRemoveItem={this.onRemoveItem}
                    />
                    <Footer size={todoList.length} />
                </Box>
            </div>
        );
    }
}

export default App;
