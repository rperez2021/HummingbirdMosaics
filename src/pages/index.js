import React from 'react'
import Link from 'gatsby-link'
import { css } from 'glamor'
import { Button } from 'reactstrap'

let mosaics = css({
  backgroundImage: `url("/static/background_hd-6a7f289c6d7b2d98e9294b9883ec5a69.jpg")`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "40vh",
  position: 'relative',

})

let buttoncenter = css({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
})

let acrtilypour = css({
  backgroundImage: `url("/static/acrylicpour_flower4-4edbb3e63facca8f7421a335242211d3.jpg")`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "40vh",
  position: 'relative',

})

let stackedglass = css({
  backgroundImage: `url("/static/stackedglass5-5292a1a899e7fcb1f97e8b2ca3d66cde.jpg")`,
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "40vh",
  position: 'relative',
 

})

let test = css({
  ':hover': {
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 12px 40px 0 rgba(0, 0, 0, 0.19)"
  }
})

let boxshadow = css({
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  ':hover': {
    boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.3), 0 12px 40px 0 rgba(0, 0, 0, 0.4)"
  }
})




const IndexPage = () => (
  
  <div className="container">



    <div className="row">

      <div className="mt-4 col-sm-12 col-md-8 p-0 mr-md-5 align-items-sm-center" {...boxshadow} >
        <div className="p-0" {...mosaics} >

        </div>
        <div className="py-3">
          <p className="my-0 p-0 text-center">Cut Glass Mosaics</p>
        </div>
      </div>


      <div className=" mt-4 col-sm-12 col-md-3 p-0"  {...boxshadow} >
        <div className="p-0" {...acrtilypour} >

        </div>
        <div className="py-3">
          <p className="my-0 p-0 text-center">Acrylic Pours</p>
        </div>
      </div>

    </div>


    <div className="row  mr-md-2">
      <div className="mt-4 col-12 p-0" {...boxshadow} >
        <div className="p-2" {...stackedglass} >

        </div>
        <div className="py-3">
          <p className="my-0 p-0 text-center">Stacked Glass</p>
        </div>
      </div>
    </div>


    {/* <h1>Hi people</h1>
    <img src="/static/hummingbird_logo-e012daf8d3da26a574993475eb22f8e4.jpg" alt="HummingBird Logo" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link> */}
  </div>
 
)

export default IndexPage
