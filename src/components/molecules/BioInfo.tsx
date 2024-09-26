import React from 'react'
import '../../styles/BioInfo.css'
import { SpanInfo } from '../atoms/SpanInfo'

function BioInfo() {
  return (
    <div className='bio'>
      <h2 className='bio_title'>Bio</h2>
      <ul>
        <SpanInfo date='2004' sentence='Born in Lima Peru' />
        <SpanInfo date='11/12/2004' sentence='birthday' />
      </ul>
    </div>
  )
}
export { BioInfo }
