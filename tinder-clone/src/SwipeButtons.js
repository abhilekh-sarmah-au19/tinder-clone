import React from 'react'
import "./css/SwipeButtons.css"
import FlashOnIcon from '@mui/icons-material/FlashOn';
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton>
            <ReplayIcon fontSize='large' className='icon_reply'></ReplayIcon>
            </IconButton>
            <IconButton>
            <CloseIcon fontSize='large' className='icon_close'></CloseIcon>
            </IconButton>
            <IconButton>
            <StarRateIcon fontSize='large' className='icon_rate'></StarRateIcon>
            </IconButton>
            <IconButton>
            <FavoriteIcon fontSize='large' className='icon_favorite'></FavoriteIcon>
            </IconButton>
            <IconButton>
            <FlashOnIcon fontSize='large' className='icon_flash'></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
