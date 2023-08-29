import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href="https://twitter.com/ore_kolade" target="_blank" rel="noreferrer"><BsTwitter /></a>
        </div>
        <div>
          <a href="https://web.facebook.com/oremma/" target="_blank" rel="noreferrer"><FaFacebookF  /></a>
        </div>
        <div>
          <a href="https://www.instagram.com/oremma0/" target="_blank" rel="noreferrer"><BsInstagram  /></a>
        </div>
    </div>
  )
}

export default SocialMedia