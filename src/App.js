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

    sendButton(x,y) {
        fetch('http://localhost:8000/mines/revealed/'+x+'/'+y+'/2/')
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
                        this.state.table.map(function (row, x) {
                            return(
                            <div>
                                {
                                    row.map(function (item, y) {
                                        return(
                                        <button onClick={() => this.sendButton(x,y)}> {item}</button>
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
