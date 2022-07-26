import { Component, ReactNode } from 'react';
import { IMonster } from '../../App';

class CardList extends Component<{ monsters: IMonster[] }> {
  render(): ReactNode {
    const { monsters } = this.props;

    return monsters.map((monster) => (
      <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    ));
  }
}

export default CardList;
