import React, { Component, useState, useEffect } from 'react';
import './App.css';

const App = ({ titulo }) => {
    const [val, setVal] = useState(0);

    useEffect(() => {
        console.log('Mountou o functional component');
    }, []);

    const fn = () => setVal(val + 1);

    return (
        <div className="App">
            <span
                style={{
                    color: 'blue',
                    backgroundColor: 'yellow',
                }}
            >
                {' '}
                Meu todo {titulo}{' '}
            </span>
            <span> Meu todo {val} </span>
            <button onClick={fn}>btn</button>
        </div>
    );
};

// -----------------------------------

export class App2 extends Component {
    state = {
        test2: 0,
    };

    componentDidMount() {
        console.log(' Componente montou ');
    }

    exemploFn = (param) => {
        const { test2 } = this.state;
        this.setState({
            test2: test2 + 1,
        });
    };

    render() {
        const { test } = this.props;
        const { test2 } = this.state;

        return (
            <div className="App">
                <span> Meu todo {test}</span>
                <span> Meu todo {test2}</span>
                <button onClick={this.exemploFn}>btn</button>
            </div>
        );
    }
}

export default App;
