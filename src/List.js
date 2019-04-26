import React, { Component } from 'react'
import { orbit } from './orbit'

let listItems = [
  'a', 'b', 'c', 'd', 'e'
]

export const FirstList = () => {
  let anims = listItems.map((x, i) =>
    orbit('list-' + i, ['border-radius', 'background-color'])
  )
  return (
    <div>
      <h3>This is a specific context!</h3>
      <div style={{ border: `1px solid #eee`}}>
        <p>The list is nested in this container</p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {listItems.map((item, i) =>
            <div {...anims[i]} className="myClass"></div>
          )}
        </div>
      </div>
    </div>
  )
}

export const SecondList = () => {
  let anims = listItems.map((x, i) =>
    orbit('list-' + i, ['border-radius', 'background-color'])
  )
  return (
    <div style={{ position: 'fixed', bottom: 200, right: 300, border: '1px solid #eee' }}>
      <h3>This is a completely different context!</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {listItems.map((item, i) =>
          <div {...anims[i]} className="myOtherClass"></div>
        )}
      </div>
    </div>
  )
}
