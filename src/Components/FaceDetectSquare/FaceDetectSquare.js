import React from 'react';

export default function FaceDetectSquare({ imgURL }) {
  return (
    <div className="image-outer">
      <img className="image-inner" src={imgURL}>
      </img>
    </div>
  )
}
