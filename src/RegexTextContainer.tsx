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
    regexText: ''
  };

  componentDidUpdate = (prevProps: Props, prevState: State) => {
    const { inputText, regexText } = this.state;
    const { inputText: prevInputText, regexText: prevRegexText } = prevState;

    if (
      regexText &&
      (prevRegexText !== regexText || prevInputText !== inputText)
    ) {
      this.highlightInputText(inputText);
    }
  };

  highlightInputText = (inputText: string) => {
    const { regexText } = this.state;

    const sanitizedRegex = this.sanitizeRegex(regexText);

    const stringToGoIntoRegex = new RegExp(sanitizedRegex, 'g');

    const matchingText = inputText.match(stringToGoIntoRegex);

    const mapped = inputText
      .split('')
      .map(each => {
        return each.match(regexText) ? `<strong>${each}</strong>` : each;
      })
      .join('');

      console.log('aaa', mapped)
    this.setState({ inputText: mapped });
  };

  sanitizeRegex = (regexText: string) => {
    return regexText;
    // return regexText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  updateRegexText = (event: any) => {
    const {
      target: { value }
    } = event;

    this.setState({ regexText: `${value}` });
  };

  updateInputText = (event: any) => {
    const {
      target: { value }
    } = event;

    this.setState({ inputText: value });
  };

  render() {
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
