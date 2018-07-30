import React from 'react'
import Link from 'gatsby-link'
import Navigation from './navigation'
import { css } from 'glamor'

let footercss = css({
  backgroundColor: "grey",
  position: 'absolute',
  width: '100%',
  bottom: 0,
  height: 80,
  marginTop: 100
})

const Footer = () => (
  <footer className="footer" {...footercss}>
  <div className="container">
   
       <h5 className="py-4 text-center">Made for my Mom with Love</h5>
       
      
  </div>
  </footer>
)

export default Footer