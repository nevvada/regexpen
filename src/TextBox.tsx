import React from 'react'

interface Props {
  updateText: (arg: any) => void;
  userText: string;
}

const TextBox = ({ updateText, userText }: Props) => {

  return (
    <section className="text-box">
      <form>
        <input type="text" onChange={updateText} />  
      </form> 
    </section>
  )
}

export default TextBox;