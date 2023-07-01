import { findAllByDisplayValue } from "@testing-library/react";

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    _spotify: null,
    discover_weekly: null,
    top_artists: null,
    //token: "BQAQmYBmOEZUYM7lZD4rN-3MYiCuXWagu4P60JG4QRwNU1uY0TiVYvMLG0Xr4z_dat6q2EqERaNeK9mMQrCgMFW9-O-Fv87-cUWdcHe3tKZJ9FnZ-boEYk2aLVnVqhB6klsYG1HsT1UQB0borqdmnDPMdBi2YbNaC8c0zSsjlTFB53aMVAHdnyDgKUxN1HY6LMDF2tPqU_bQScZ5uTee",
};
//defining elemsts of datalayer
const reducer = (state, action) =>
{
    console.log(action);

    switch (action.type) {
        //if action is done on user
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };                 
        default:
            return state;
    }
};

export default reducer;