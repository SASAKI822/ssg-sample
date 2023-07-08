import React, { useState } from 'react'
import useTextColor from '../hooks/textSetColor'

export const Color = () => {
  const {color, setColor} = useTextColor()
  const [bgColor, setBgColor] = useState<"yellow" | "black">("yellow")
  return (
    <div style={{color: color, background: bgColor}}>
      <h1>Hello</h1>
      <div>
        <h2>T</h2>
      </div>
    </div>
  )
}

