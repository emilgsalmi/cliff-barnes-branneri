"use client"
import React from 'react'
import Link from 'next/link'
import './_hero.scss'

interface Image{
    url:string,
    alt:string
}

export default function Hero({title, subtitle, backgroundImage}:{title:string, subtitle:string, backgroundImage:Image}) {
  return (
    <div className='hero-container' style={{backgroundImage: `url(${backgroundImage.url})`}}>
        <div className='hero-wrapper'>
            <div className="svg-container">
              <div className='link-wrapper'>
                <Link className='cliff-link' href={'https://www.cliff.se/'} target='_blank'>cliff</Link>
                <Link className='sue-elen-link' href={'https://www.sue-ellen.se/'} target='_blank'>sue elen</Link>
                <Link className='instagram-link' href={'https://www.instagram.com/cliffbarnesbranneri/'} target='_blank'>instagram</Link>
              </div>
            </div>
            {/* <img className='logo' src="/assets/images/new-label.svg" alt="" /> */}
            {/* <h1>{title}</h1>
              <p>{subtitle}</p> */}
      </div>
    </div>
  )
}
