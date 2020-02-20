import React from 'react'

interface Props {
  updateRegexText: (arg: any) => void;
}

const RegexBox = ({ updateRegexText }: Props) => {
  return (
    <section className="regex-box">
      <div className="outer-wrapper">
      </div>
      <div className="regex-field" contentEditable="true">

      </div>
      <span className="regex-field-border" />
        <p className="floating-label">Regex Field</p>
    </section>
  )
}

export default RegexBox;