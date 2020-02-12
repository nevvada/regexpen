import React, { Component } from 'react';

import RegexBox from './RegexBox';
import TextBox from './TextBox';

interface Props {}

interface State {
  inputText: string;
  matchingText: string;
  regexText: string;
}

export class RegexTextContainer extends Component {
  state: State = {
    inputText: '',
    matchingText: '',
    regexText: '',
  }

  componentDidUpdate = (prevProps: Props, prevState: State) => {
    const { inputText, regexText } = this.state;
    const { 
      inputText: prevInputText, 
      regexText: prevRegexText 
    } = prevState;

    if (prevInputText !== inputText || prevRegexText !== regexText) {
      this.highlightInputText(inputText)
    }
  }

  highlightInputText = (inputText: string) => {
    const { regexText } = this.state;

    const matchingText = inputText.match(regexText);

    this.setState({ matchingText });
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
