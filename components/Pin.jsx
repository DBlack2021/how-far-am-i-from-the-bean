import React from 'react'

export default function Pin({ text }) {
  const imgSrc = "https://alohe.github.io/emojicloud/svg/Round pushpin.svg"
  return (
    <img style={{   
      transform: 'translate(-50%, -50%)',
      width: '30px',
      height: '30px',
      position: 'absolute',
    }} src={imgSrc} />
  )
}
