import React, { useEffect, useState} from 'react'
import "./Footer.css";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import { Grid, Slider } from "@mui/material";
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDataLayerValue } from "./DataLayer";

function Footer() {
  const[{ discover_weekly }] = useDataLayerValue();
  console.log(discover_weekly)
  const [{ token, item, playing }, dispatch] = useDataLayerValue();
  return (
    <div className="footer">
        <div className="footer__left">
          <img className="footer__albumLogo"
            src={discover_weekly?.tracks.items[0].track.album.images[0].url}
            alt="" />
          <div className="footer__songInfo">
            <h4>{discover_weekly?.tracks.items[0].track.name}</h4>
            <p>{discover_weekly?.tracks.items[0].track.artists[0].name}</p>
            <FavoriteBorderIcon className='fav__icon'/>
          </div>
        </div>
        <div className="footer__center">
          <ShuffleIcon className="footer__green" />
          <SkipPreviousIcon className="footer__icon" />
          <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
          <SkipNextIcon className="footer__icon" />
          <RepeatIcon className="footer__green" />
        </div>
        <div className="footer__right">
          <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon />
            </Grid>
            <Grid item>
              <VolumeDownIcon />
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continous-slide" />
            </Grid>
          </Grid>
        </div>
    </div>
  );
}

export default Footer