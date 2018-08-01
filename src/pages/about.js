import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { Button } from 'reactstrap'

let textbg = css({
    backgroundColor: "#D1D0D6",
    backgroundImage: "-webkit-linear-gradient(110deg, #89866A  30%, rgba(0,0,0,0) 20%), -webkit-linear-gradient(30deg, #D1D0D6 60%, #D6D5D0 40%)",
    minHeight: "auto",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: "5px",
    
})

let textblend = css({
  color: "#D6D5D0",
  mixBlendMode: "difference",
})


const AboutPage = () => (
    <div className="container">

        <section {...textbg}>
    <div className="row mt-5">
      <div className="col-12" >
        
          <h3 {...textblend}>
          <p>
          Hi! My Name is Aida, I am a San Diego, CA based artist who specializes in creating mosaics,
          stacked glass art, acrylic pours and sculptures.
          </p>
          </h3>
  
          <h5  {...textblend}>
          <p>
          I am self taught and have been making arts and crafts all of my life. Working on my art bring a happy balance to my everyday
          Art provides me with an opportunity to connect with others and to bring myself back to center.
          </p>
          </h5>
    
        <h5  {...textblend}>
        <p>
          Though I enjoy working in oils, acrylics, jewelry and beading; glass mosaics have captured me in recent years,
          I'm amazed at how I find new inspirations in the swirls and colors on a sheet of glass.
          </p>
          </h5>
      
        
        <h5  {...textblend}>
        <p>
          While living in Los Angeles I was fortunate to learn mosaic art from known artist like Karen Silton and Lillian Sizemore,
    and not until I took a workshop with Laurie Mika,  was I inspired to incorporate polymer clay into my pieces.
    These workshops have been wonderful, invaluable experiences.
    </p>
    </h5>
        
      </div>
    </div>
    </section>
    </div>
)

export default AboutPage
