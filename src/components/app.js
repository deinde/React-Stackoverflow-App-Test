import React, { Component } from 'react';
import SearchBar from '../containers/searchbar';
import provider from '../../src/index'

export default class App extends Component {
	render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );                         
  }
}
