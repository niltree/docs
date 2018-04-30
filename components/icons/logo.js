import PropTypes from 'prop-types'
import React from 'react'

class Logo extends React.PureComponent {
  render() {
    return <img src="/static/icons/48x48.png" />
  }
}

Logo.contextTypes = {
  darkBg: PropTypes.bool
}

export default Logo
