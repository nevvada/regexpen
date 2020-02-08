import React, { Component } from 'react';

import TextBox from './TextBox';
import RegexBox from './RegexBox';

export class RegexTextContainer extends Component {
  render() {
    return (
      <>
        <TextBox />
        <RegexBox />
      </>
    )
  }
}

export default RegexTextContainer;
