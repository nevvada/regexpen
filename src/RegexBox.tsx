import React from 'react'

interface Props {
  updateRegexText: (arg: any) => void;
}

const RegexBox = ({ updateRegexText }: Props) => {
  return (
    <section className="regex-box">
      <form>
        <input onChange={updateRegexText}/>
      </form>
    </section>
  )
}

export default RegexBox;