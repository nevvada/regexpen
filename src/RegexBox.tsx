import React from 'react'

interface Props {
  updateRegexText: (arg: any) => void;
}

const RegexBox = ({ updateRegexText }: Props) => {
  return (
    <section className="regex-box">
      <form>
        <input 
          autocomplete="off"
          className="regex-field"
          id="regex-field" 
          onChange={updateRegexText}
        />
        <label className="floating-label">
          Regex Field
        </label>
        <span className="regex-field-border" />
      </form>
    </section>
  )
}

export default RegexBox;