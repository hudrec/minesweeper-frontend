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
        fetch('https://minesweepergame.herokuapp.com//mines/revealed/'+x+'/'+y+'/',{method:'post'})
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({ table: data.table })
            })
            .catch(console.log)
    }


    render() {
        const self = this;
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
                                        <button className={item === 'R' ? "btn btn-dark" : "btn btn-outline-dark"} disabled={item === 'R'} onClick={() => self.sendButton(x,y)}>| | </button>
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
