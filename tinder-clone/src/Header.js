import React from 'react';
import "./css/Header.css";
import TINDERLOGO from  "./images/tinder_logo.png";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import WhatshotIcon from '@mui/icons-material/Whatshot';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';



function Header() {
    return (
        <div className='header'>
            <IconButton>
            <AccountBoxIcon fontSize='large' className='header_icon' />
            </IconButton>
        <img className='header_logo' src={TINDERLOGO} alt='tinderlogo' />
        <IconButton>
        <ForumIcon fontSize='large'  className='header_icon'/>
        </IconButton>
        </div>
    )
}

export default Header
