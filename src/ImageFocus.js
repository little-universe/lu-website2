import React, { Component } from 'react'
import { orbit, Transporter } from './orbit'

export const ImageFocus = ({ imageSelected, onClick }) => {
  const renderImage = (url) => (
    <div className="hero" style={{ width: '100%' }}>
      <img src={url} />
    </div>
  )
  return (
    <div className="image-focus" style={{ width: '100%' }} onClick={onClick}>
      <Transporter name="image1" show={imageSelected === "image1"} properties={['border-radius']} overrides={{}} onlyY clampViewport>{renderImage('https://images.adsttc.com/media/images/58ff/b736/e58e/ce9e/d700/0086/medium_jpg/26.jpg?1493153582')}</Transporter>
      <Transporter name="image2" show={imageSelected === "image2"} properties={['border-radius']} overrides={{}} onlyY clampViewport>{renderImage('https://static.dezeen.com/uploads/2016/06/allmannajuvet-tourist-route-peter-zumthor-norway-arne-espeland-dezeen-sq.jpg')}</Transporter>
      <Transporter name="image3" show={imageSelected === "image3"} properties={['border-radius']} overrides={{}} onlyY clampViewport>{renderImage('https://static.dezeen.com/uploads/2009/04/pritzer-prize-squ-004.jpg')}</Transporter>
      <Transporter name="imageDescription" show={imageSelected} properties={['opacity']} onlyY clampViewport>
        <div className="image-description" >
          <h1>Allmannajuvet Zinc Mine Cafe and Museum</h1>
          <p>Swiss architect Peter Zumthor has built visitor facilities at a historic mine in Norway, with one structure that hangs off a wall and two that are raised on stilts over a steep cliffside</p>
        </div>
      </Transporter>
    </div>
  )
}
