import React from 'react'
import styles from './footer.module.css'
import { ethers } from 'ethers'
type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
        {/* <div className={styles.block}>
            <p>Current Block:</p>
            <p>  {}</p>
        </div>
        */}
    </div>
  )
}

export default Footer