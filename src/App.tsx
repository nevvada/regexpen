import React, { Component } from 'react';

import RegexTextContainer from './RegexTextContainer';

import '../scss/main.scss';
export class App extends Component {
  render() {
    return (
      <>
        <main id="app-wrapper">
          <header>
            <h1>Hello, welcome to my RegexPen.</h1>
          </header>

          <RegexTextContainer />
        </main>
      </>
    );
  }
}

export default App;
