"use client"
import React from 'react'
import Hero from './hero'

export default function HeroWordpress({data}:{data:any}) {
  return (
    <Hero 
        title={data.title}
        subtitle={data.subtitle}
        backgroundImage={data.backgroundImage}
    />
  )
}
