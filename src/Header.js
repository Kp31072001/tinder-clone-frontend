import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className='header'>

            <IconButton>

                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            <img className="header_logo" src="https://www.pngfind.com/pngs/m/13-131073_this-post-is-a-part-of-tinder-logo.png" alt="" />

            <IconButton>
                <ForumIcon />
            </IconButton>
            

        </div>
    )
}

export default Header