import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        table: [
            ['F','F','F','F','F','F',],
            ['F','F','F','F','F','F',],
            ['F','F','F','F','F','F',],
            ['F','F','F','F','F','F',],
            ['F','F','F','F','F','F',],
            ['F','F','F','F','F','F',],
        ]
    }

    componentDidMount() {
        fetch('http://localhost:8000/mines/revealed/2/2/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ table: data.table })
            })
            .catch(console.log)
    }


    render() {
        return (
            <div className="card">
                <div className="card-body">
                    {
                        this.state.table.map(function (row, ind) {
                            return(
                            <div>
                                {
                                    row.map(function (item, ind) {
                                        return(
                                        <button> {item}</button>
                                        )
                                    })
                                }
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
