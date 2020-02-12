import React from 'react'

interface Props {
  updateText: (arg: any) => void;
}

const TextBox = ({ updateText }: Props) => {

  return (
    <section className="text-box">
      <form>
        <input type="text" onChange={updateText} />  
      </form> 
    </section>
  )
}

export default TextBox;