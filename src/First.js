import React, { Component } from 'react'
import { orbit } from './orbit'

export const First = () => {
  let anim = orbit('aName', ['border-radius', 'background-color'])
  return (
    <div style={{ padding: 50 }}>
      <div {...anim} className="myClass"></div>
    </div>
  )
}

export const Second = () => {
  let anim = orbit('aName', ['border-radius', 'background-color'])
  return (
    <div style={{ padding: 100 }}>
      <div {...anim} className="myOtherClass"></div>
    </div>
  )
}
