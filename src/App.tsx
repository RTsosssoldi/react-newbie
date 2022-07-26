
import logo from './logo.svg';
import './App.scss';
import { Component } from 'react';


/* 3 generics disponibili:
* P:   props
* S:   state
* SS:  snapshot -> is the user defined type of the snapshot
*      returned by your custom implementation of getSnapshotBeforeUpdate,
*      which gets passed to componentDidUpdate so you can preserve some application specific details
*     from the last render.
*/
class App extends Component<any, { [key: string]: any }> {

  constructor(props: any) {
    super(props);

    this.state = {
      name: {
        firstName: 'Luca',
        lastName: 'Rossi',
      },
      company: 'RT'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, i work at {this.state.company}
          </p>
          <button onClick={() => this.setState({
            name: {
              firstName: 'Mario',
              lastName: 'Verdi',
            }
          })} >Change name</button>
        </header>
      </div>
    );
  }

}

export default App;
