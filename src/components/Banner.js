import React from 'react'

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
            <div>
                    <ul className="icons">
                    <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="#" className="icon alt fa-linkedin"><span className="label">LinkedIn</span></a></li>
                </ul>
                </div>
                <h1>The Mad Scientist</h1>
            </header>
            <div className="content">
                <p><br/>Highly Talented Live Music<br />
                Talent Rich Open Mics</p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Get Started</a></li>
                </ul>
            </div>
        </div>
        
    </section>
)

export default Banner
