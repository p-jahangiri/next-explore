import React from 'react'
import clsx from 'clsx';
import s from './slider.module.scss'
interface CardSliderProps {
    title?: string;
    img?: string;
    className?: string;
}

const  CardSlider:React.FC<CardSliderProps> = ({title,img }) =>{
  console.log(img)
  return (
    <div className={clsx(s.slider)}>
        {img && <img src={img} alt="img"/>}
        {title && <h5>{title}</h5>}
    </div>
  )
}

export default CardSlider;