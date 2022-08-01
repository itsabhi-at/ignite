import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

//action creator

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesUrl());
    // const upcomingData = await axios.get(upcomingGamesUrl());
    // const newData = await axios.get(newGamesUrl());
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData,
            // upcoming: upcomingData.data.results,
            // new: newData.data.results,
        }
    })
}