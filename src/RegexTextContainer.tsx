import ContentEditable from 'react-contenteditable';
import React, { Component } from 'react';

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

    const sanitizedRegex = this.sanitizeRegex(regexText);

    const stringToGoIntoRegex = new RegExp(sanitizedRegex, 'g');

    const matchingText = inputText.match(stringToGoIntoRegex);
  }

  sanitizeRegex = (regexText: string) => {
    return regexText.replace(/\\/, '\\');
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
    const { regexText } = this.state;

    return (
      <>
        <section className='regex-box'>
          <div className='outer-wrapper'></div>
          <ContentEditable
            className='regex-field'
            html={this.state.regexText}
            onChange={this.updateRegexText}
        />
          <span className='regex-field-border' />
          <p className='floating-label'>Regex Field</p>
        </section>

        <section className='input-text-box'>
          <div className='outer-wrapper'></div>
          <ContentEditable
            className='input-text-field'
            html={this.state.inputText}
            onChange={this.updateInputText}
        />
          <span className='regex-field-border' />
          <p className='floating-label'>Text Field</p>
        </section>
      </>
    );
  }
}

export default RegexTextContainer;
