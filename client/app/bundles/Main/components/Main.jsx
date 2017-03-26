import React, { PropTypes } from 'react';
import Header from '../components/Header';
import Body from '../components/Body';

export default class Main extends React.Component {
  render() {
    return (
      <div>
          <Header/>
          <Body/>
      </div>
    );
  }
}
