import React, { Component } from 'react';

import RegexBox from './RegexBox';
import TextBox from './TextBox';

interface State {
  regexText: string;
  userText: string;
}

export class RegexTextContainer extends Component {
  state: State = {
    regexText: '',
    userText: '',
  }

  updateRegex = () => {

  }

  updateText = (event: any) => {
    const { target: { value } } = event;

    this.setState({ userText: value });
  }

  render() {
    const { userText } = this.state;

    return (
      <>
        <RegexBox 
          userText={userText} 
        />
        <TextBox 
          updateText={this.updateText}
          userText={userText}
        />
      </>
    )
  }
}

export default RegexTextContainer;
