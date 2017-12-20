import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import pic16 from '../assets/images/pic16.jpg'

var sectionStyle = {
    textAlign: 'center',
}

var imgStyle = {
    border: '5px solid red',
    width: '100%',
    height: 'auto',
    maxWidth: '800px',
}

const World = (props) => (
    <div>
        <Helmet>
            <title>The Mad Scientist - About</title>
            <meta name="description" content="Live Music" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one" style={ sectionStyle } >
                <img style={ imgStyle } src={pic16} alt="" />
            </section>
            
        </div>

    </div>
)

export default World