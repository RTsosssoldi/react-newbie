import './App.scss';
import { Component } from 'react';

interface IMonster {
  id: string;
  name: string;
}

interface ILocalState {
  monsters: IMonster[];
}

/* 3 generics disponibili:
 * P:   props
 * S:   state
 * SS:  snapshot -> is the user defined type of the snapshot
 *      returned by your custom implementation of getSnapshotBeforeUpdate,
 *      which gets passed to componentDidUpdate so you can preserve some application specific details
 *     from the last render.
 */
class App extends Component<any, ILocalState> {
  constructor(props: any) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => ({ monsters: users }),
          () => console.log(this.state)
        )
      );
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => (
          <div>
            <h1 key={monster.id}>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
