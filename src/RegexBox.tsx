import React from 'react'

interface Props {
  userText: string;
}

const RegexBox = ({ userText }: Props) => {
  return (
    <section className="regex-box">
      {userText}
    </section>
  )
}

export default RegexBox;