import React from 'react'
import images from '../../../data.json'
import styles from './Thumbnail.module.css'

const Thumbnail = () => {
  return (
    <div>
      {images.map((image) => (
        <div className={styles.thumbWrapper} key={image.name}>
          <img src={image.mobile} alt={image.name} />
          <h2>{image.title}</h2>
          <span>{image.description}</span> 
        </div>
      ))}
    </div>
  )
}

export default Thumbnail
