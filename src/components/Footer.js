import React from 'react'

var footerStyle = {
    textAlign: 'center',

}

const Footer = (props) => (
    <footer id="footer" style={ footerStyle }>
        <div className="inner">
            <ul className="copyright">
                <li>Design: <a href="https://jwgravesfl.surge.sh">J. Graves - Web Design and Development</a></li>
            </ul>
        </div>
    </footer>
)

export default Footer
