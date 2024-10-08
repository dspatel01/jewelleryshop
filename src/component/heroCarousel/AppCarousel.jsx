import React from 'react'
import './appCarousel.css'
import video1 from '../../assets/heroImages/coverVideo.mp4'
import image1 from '../../assets/heroImages/cover-img-11.png'
import image2 from '../../assets/heroImages/cover-img-12.png'
import image3 from '../../assets/heroImages/cover-img-14.png'

const AppCarousel = ({playStatus,heroCount}) => {

  if(playStatus){
    return(
      <video className='background fade-in ' autoPlay loop muted>
        <source src={video1} type='video/mp4'/>
      </video>
    )
  }
  else if(heroCount === 0){
    return <img src={image1} className='background fade-in' alt="" />
  }
  else if(heroCount === 1){
    return <img src={image2} className='background fade-in' alt="" />
  }

  else if(heroCount === 2){
    return <img src={image3} className='background fade-in' alt="" />
  }
}

export default AppCarousel
