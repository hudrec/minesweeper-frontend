import React, { Component } from 'react';
import './App.css';

class App extends Component {

    state = {
        table: [
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'B', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'B', 'F', 'F', 'F', 'F', 'F', 'B', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'B', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'B', 'F', 'F', 'F', ],
            ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'B', 'F', 'F', 'F', 'F', 'F', 'F', ],

        ]
    }

    sendButton(x,y) {
        fetch('https://minesweepergame.herokuapp.com/mines/revealed/'+x+'/'+y+'/',{method:'post'})
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.status === 'BOMB'){
                    alert('GAME OVER');
                }
                else{
                    this.setState({ table: data.table })
                }
            })
            .catch(console.log)
    }

    sendFlag(x,y){
        fetch('https://minesweepergame.herokuapp.com/mines/flag/'+x+'/'+y+'/',{method:'post'})
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
                            <div key={x}>
                                {
                                    row.map(function (item, y) {
                                        return(
                                        <button key={y}
                                                className={item === 'R' ? "btn btn-dark" : item === 'L'? "btn btn-danger": "btn btn-outline-dark"}
                                                disabled={item === 'R'}
                                                onContextMenu={() => self.sendFlag(x,y)}
                                                onClick={() => self.sendButton(x,y)}>| | </button>
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
