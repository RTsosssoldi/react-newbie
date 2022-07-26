import './App.scss';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export interface IMonster {
  id: string;
  name: string;
}

interface ILocalState {
  monsters: IMonster[];
  searchTerm: string;
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
      searchTerm: '',
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

  // non solo più leggibile ma acnhe ottimizzazione
  onSearchChange = (event: any) => {
    const searchTerm = event.target.value.toLowerCase();
    this.setState({ searchTerm });
  };

  render() {
    // ottimizzazione
    const { monsters, searchTerm } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} className="search-box" />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
