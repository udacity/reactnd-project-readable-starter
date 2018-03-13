import React from 'react'
import Category from './Category'

function SideNav (props) {
  return(
    <div className={props.sideNavClass.join(' ')}>
      <Category />
    </div>
  )
}

export default SideNav
