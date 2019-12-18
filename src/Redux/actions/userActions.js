import { SET_USER, SET_ERRORS, CLEAR_ERRORS, SET_UNAUTHENTICATED } from '../types';
import axios from 'axios';


export const loginUser = (userData, history) => (dispatch) => {
  axios
    .post('https://europe-west1-react-game-website.cloudfunctions.net/api/login', userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      //history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};


export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};


export const getUserData = () => (dispatch) => {
  axios
    .get('https://europe-west1-react-game-website.cloudfunctions.net/api/user')
    .then((result) => {
      dispatch({
        type: SET_USER,
        payload: result.data
      });
    })
    .catch((error) => console.log(error));
};

export const signupUser = (newUserData, history) => (dispatch) => {
  axios
    .post('https://europe-west1-react-game-website.cloudfunctions.net/api/signup', newUserData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      //history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data
      });
    });
};

const setAuthorizationHeader = (token) => {
  const FBIdToken = `Bearer ${token}`;
  localStorage.setItem('FBIdToken', FBIdToken);
  axios.defaults.headers.common['Authorization'] = FBIdToken;
};
