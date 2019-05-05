import React from 'react';
import BoundingBox from './BoundingBox';

export default function FaceDetectSquare({ imgURL, boundingBoxRegions }) {

  const boxes = boundingBoxRegions.map((region, index) => {
    return <BoundingBox
      key={`bounding-box-${index}`}
      coords={region.region_info.bounding_box} />
  });

  return (
    <div className="image-outer">
      <img className="image-inner" src={imgURL} />
      {boxes}
    </div >
  )
}