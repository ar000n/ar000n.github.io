import PropTypes from "prop-types"
import React from "react"
import cover from '../images/arun-cover.png'


const Header = ({ siteTitle }) => (
  <header
  >
    <div
      style={{

          backgroundImage: `url(${cover})`,
          margin: `0 auto`,
          height: `37rem`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Profile`,
}

export default Header
