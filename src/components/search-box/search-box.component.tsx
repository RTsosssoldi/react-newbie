import { ChangeEventHandler, Component, ReactNode } from 'react';

class SearchBox extends Component<{
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  className: string;
}> {
  render(): ReactNode {
    const { onChangeHandler, className } = this.props;

    return (
      <input
        type="search"
        className={`search-box ${className}`}
        placeholder="search..."
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
