import React from 'react'

interface Props {
  updateText: (arg: any) => void;
  userText: string;
}

const TextBox = ({ updateText, userText }: Props) => {

  return (
    <>
      <form>
        <input type="text" onChange={updateText} />  
      </form> 
    </>
  )
}

export default TextBox;