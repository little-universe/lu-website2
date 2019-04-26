import React, { Component } from 'react'
import { orbit, Transporter } from './orbit'

export const ImageList = ({ imageSelected, selectImage }) => {
  return (
    <div className="image-list" style={{height: '100vh', position: 'relative', overflowY: 'scroll' }}>
      <div className="intro-section">
        <h1>Image List</h1>
        <p>Here is a list of images that will serve as our starting point.</p>
      </div>
      <Transporter name="image1" show={imageSelected !== "image1"} guaranteedFirst properties={['border-radius']}>
        <div className="image-block" onClick={() => selectImage(1)}>
          <img src="https://images.adsttc.com/media/images/58ff/b736/e58e/ce9e/d700/0086/medium_jpg/26.jpg?1493153582" />
        </div>
      </Transporter>
      <Transporter name="image2" show={imageSelected !== "image2"} guaranteedFirst properties={['border-radius']}>
        <div className="image-block" onClick={() => selectImage(2)}>
          <img src="https://static.dezeen.com/uploads/2016/06/allmannajuvet-tourist-route-peter-zumthor-norway-arne-espeland-dezeen-sq.jpg" />
        </div>
      </Transporter>
      <Transporter name="image3" show={imageSelected !== "image3"} guaranteedFirst properties={['border-radius']}>
        <div className="image-block" onClick={() => selectImage(3)}>
          <img src="https://static.dezeen.com/uploads/2009/04/pritzer-prize-squ-004.jpg" />
        </div>
      </Transporter>
      <Transporter name='imageDescription' show={true} guaranteedFirst>
        <div style={{ opacity: 0 }}>&nbsp;</div>
      </Transporter>
    </div>
  )
}
