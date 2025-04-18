import React from 'react'

const ThemeItem = ({img, hue, changeColor}) => {
  return (
    <img src={img} alt='' className='theme-img' onClick={() => {
     changeColor(hue);
    }} />
  )
}

export default ThemeItem;