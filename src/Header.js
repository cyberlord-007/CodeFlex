import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header =() =>{
    return(
        <div className='header'>
            <FontAwesomeIcon icon='code' size='2x' spin />
            <h1>CodeFlex</h1>
        </div>
    )
}

export default Header