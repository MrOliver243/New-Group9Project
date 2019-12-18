import { SET_ERRORS, CLEAR_ERRORS, SET_GAMES, SET_GAME, SET_REVIEWS, POST_REVIEW } from '../types';
import axios from 'axios';

export const getUserData = (userHandle) => (dispatch) => {
  axios.get(`https://europe-west1-react-game-website.cloudfunctions.net/api/user/${userHandle}`).then((res) => {
      dispatch({
        payload: res.data
      });
    })
    .catch(() => {
      dispatch({
        payload: null
      });
    });
};


// this function gets all games from the database
export const getAllGames = () => (dispatch) => {
  axios.get('https://europe-west1-react-game-website.cloudfunctions.net/api/getAllGames').then((result) => {
      dispatch({
        type: SET_GAMES,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAMES,
        payload: []
      });
    });
};

// this function gets one game from the database

export const getGame = (gameId) => (dispatch) => {
  axios.get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getGame/${gameId}`).then((result) => {
      dispatch({
        type: SET_GAME,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAME,
        payload: null
      });
    });
};

export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getAllGamesPerGenre = (genre) => (dispatch) => {
  axios.get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getAllGamesPerGenre/${genre}`).then((result) => {
      dispatch({
        type: SET_GAME,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAME,
        payload: null
      });
    });
};


export const getComments = (gameId) => (dispatch) => {
  axios.get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getGame/${gameId}`).then((result) => {
      dispatch({
        type: SET_GAME,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_GAME,
        payload: null
      });
    });
};

//getReviews
export const getAllReviews = (gameId) => (dispatch) => {
  axios.get(`https://europe-west1-react-game-website.cloudfunctions.net/api/getAllReviews/${gameId}`).then((result) => {
    dispatch({
       type: SET_REVIEWS,
       payload: result.data
     });
   })
    .catch((error) => {
      dispatch({
        type: SET_REVIEWS,
        payload: null
      });
    });
};

//post review
export const postReview = (newReview) => (dispatch) => {
  axios.post('https://europe-west1-react-game-website.cloudfunctions.net/api/postReview', newReview).then((result) => {
      dispatch({
        type: POST_REVIEW,
        payload: result.data
      });
    })
    .catch((error) => {
      dispatch({
        type: SET_ERRORS,
        payload: null
      });
    });
};


/*
export const getScream = (screamId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/scream/${screamId}`)
    .then((res) => {
      dispatch({
        type: SET_SCREAM,
        payload: res.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch((err) => console.log(err));
};
*/
