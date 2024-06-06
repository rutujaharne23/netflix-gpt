import React from 'react'
import { GPTSerchBar } from './GPTSearchBar'
import { GPTMovieSuggestions } from './GPTMovieSuggestions'
import { BACKGROUND_IMAGE } from '../utils/constants'

export const GPTSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img
            src={BACKGROUND_IMAGE}
            alt="bgImage"
            className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-overlay"></div>
        </div>
        <GPTSerchBar />
        <GPTMovieSuggestions />
    </div>
  )
}
