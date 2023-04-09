import React, { ReactChildren } from 'react'
import styles from './button.module.css'
import Image from 'next/image'

type Props = {
    img_icon?:any;
    children:any;
    style?: Object;
    onClick?: ()=> void;
    type?: string;
}


const Button = ({children, img_icon, style, onClick}: Props) => {
  return (
  
    <button onClick={onClick} style={style? style: {}} className={styles.container}>
        {
            img_icon && <Image className={styles.img} src={img_icon}/>
        }
        {children}
    </button>
  )
}

export default Button