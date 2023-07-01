import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{user, token }, dispatch] = useDataLayerValue();
  
  useEffect(() => {
    //getting token from the url yo check if authorized user has logged in
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
//if token is valid, redirecting to the main page
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
//getting user information
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
      
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist(/*'37i9dQZEVXcW6LBnZuBoID'*/'37i9dQZEVXcVxWWnmVlJaX').then(response => 
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
        );
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
      
    }
  }, [token, dispatch]);


  return (
    <div className="app">
      {
        //displaying the output, ie, the player and login page(if token is invalid);
        token ? (
         <Player spotify={spotify}/>
        ) : (
      <Login />
        )
      }
    </div>
  );
}

export default App;
