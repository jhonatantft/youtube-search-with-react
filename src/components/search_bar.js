import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = { term: ''}
  }

  render() {
        return (
          <div className="search-bar">
            <input
              placeholder="Search"
              value={this.state.term}
              onChange={event => this.onInputChange(event.target.value)} />
          </div>
        );
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }
}

export default SearchBar;