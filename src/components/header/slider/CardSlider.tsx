import React from 'react'
import clsx from 'clsx';
import s from './slider.module.scss'
interface CardSliderProps {
    title?: string;
    img?: string;
    className?: string;
}

const  CardSlider:React.FC<CardSliderProps> = ({title,img ,className}) =>{
  console.log(img)
  return (
    <div className={clsx(s.slider,className)}>
        {img && <img src={img} alt="img"/>}
        {title && <h3>{title}</h3>}
    </div>
  )
}

export default CardSlider;