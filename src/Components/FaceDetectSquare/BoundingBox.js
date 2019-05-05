import React from 'react';

export default function BoundingBox(coords) {
  let style = {
    top: `${coords.coords.top_row * 100}%`,
    height: `${(coords.coords.bottom_row - coords.coords.top_row) * 100}%`,
    left: `${coords.coords.left_col * 100}%`,
    width: `${(coords.coords.right_col - coords.coords.left_col) * 100}%`
  }

  return (
    <div className="bounding-box" style={style} />
  )
}
