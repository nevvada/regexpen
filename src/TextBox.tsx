import React, { useEffect } from 'react'

interface Props {
  updateText: (arg: any) => void;
  updatedText: string;
}

const addSpans = (text: string) => {
  return [...text].map((each, index) => {
    return (
    <span 
      key={each + index}
      style={{color: 'red'}}>
        {each}
    </span>)
  })
}

const TextBox = ({ highlightInputText, regexText, updateText, updatedText }: Props) => {
  useEffect(() => {
    highlightInputText(updatedText)
  }, [regexText])
  
  return (
    <section className="text-box">
      <form>
        <input type="text" onChange={updateText} />
      </form> 
      <p>{addSpans(updatedText)}</p>
    </section>
  )
}

export default TextBox;