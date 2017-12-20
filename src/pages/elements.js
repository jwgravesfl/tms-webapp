import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import pic15 from '../assets/images/pic15.jpg'

const Elements = (props) => (
    <div>
        <Helmet>
            <title>The Mad Scientist - About</title>
            <meta name="description" content="Live Music" />
        </Helmet>

        <BannerLanding />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Dale Johnston - The Mad Scientist</h2>
                    </header>
                    <p>
                        Entertainment Provider
                    </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/#" className="image">
                        <img src={pic15} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">

                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/#" className="button">Learn more on Facebook</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </div>
)

export default Elements