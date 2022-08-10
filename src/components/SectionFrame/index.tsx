import React from 'react'
import { SectionFrameProps } from './types'

const SectionFrame: React.FC<SectionFrameProps> = ({title, children}) => {
  return (
    <div>
        <h3 className='text-21 font-semibold text-heading mb-3'>{title}</h3>
        {children}
    </div>
  )
}

export default SectionFrame