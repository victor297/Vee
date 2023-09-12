import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://twitter.com/dvictor297" target="_blank" rel="noreferrer"><BsTwitter /></a>
        </div>
        <div>
          <a href="https://web.facebook.com/sammyviks" target="_blank" rel="noreferrer"><FaFacebookF  /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/veackteur" target="_blank" rel="noreferrer"><BsInstagram  /></a>
        </div>
    </div>
  )
}

export default SocialMedia
