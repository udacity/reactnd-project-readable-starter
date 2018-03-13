import React from 'react'
import PropTypes from 'prop-types'
import FaBars from 'react-icons/lib/fa/bars'

import '../Header/Header.css'


function Header (props) {

  Header.propTypes = {
    onBarClick: PropTypes.func.isRequired
  }

    return(
      <div className="Header">
        <div className="Bar-Name-Container">

          <div className='Bar-Container' onClick={props.onBarClick}>
            <FaBars className='Bar'/>
          </div>

          <div className="Name-Container">
            <h1 className="Name">Readable</h1>
          </div>

        </div>
      </div>
    )

}

export default Header
