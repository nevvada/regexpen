import React, { Component } from 'react';

import RegexBox from './RegexBox';
import TextBox from './TextBox';

interface State {
  inputText: string;
  regexText: string;
  userText: string;
}

export class RegexTextContainer extends Component {
  state: State = {
    inputText: '',
    regexText: '',
    userText: '',
  }

  updateRegexText = (event: any) => {
    const { inputText } = this.state;
    const { target: { value } } = event;

    this.setState({ regexText: value });
  }

  updateText = (event: any) => {
    const { target: { value } } = event;

    this.setState({ inputText: value });
  }

  render() {
    return (
      <>
        <RegexBox 
          updateRegexText={this.updateRegexText}
        />
        <TextBox 
          updateText={this.updateText}
        />
      </>
    )
  }
}

export default RegexTextContainer;
