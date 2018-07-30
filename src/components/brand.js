import React from 'react';;
import { css } from 'glamor'

let hrcss = css({
    WebkitMarginBefore: 0,
    WebkitMarginAfter: 0,
    WebkitMarginStart: 0,
    WebkitMarginEnd: 0,
    margin: 0,
})

let divformat = css({
    alignItems: 'center',
})

let h3text = css({
    
    fontWeight: "600",
    fontFamily: "Marck Script",
})

let h5text = css({
    
    fontWeight: "200",
    
})

let brand = css({
    height: "100",
    maxWidth: '106px',

})

const Brand = ({ data }) => (
    <div className="row" {...divformat}>
        <div className="col">
            <div className="col-3 float-left">
                <img className="my-0 " {...brand} src="/static/hummingbird_logo-e012daf8d3da26a574993475eb22f8e4.jpg" alt="HummingBird Logo" />
            </div>
            <div className="col-9 d-none d-md-block float-right">
                <div className="pt-4" {...divformat}>

                    <h3 {...h3text} className="mb-2 text-center" >Hummingbird Mosaics</h3>
                    <hr className="m-0" />
                    <h5 {...h5text} className="text-center mt-2">Whimsical Glass Mosaics</h5>
                </div>
            </div>
        </div>
    </div>
)

export default Brand;