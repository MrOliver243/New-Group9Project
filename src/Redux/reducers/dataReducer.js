/*import {
  SET_SCREAMS,
  LIKE_SCREAM,
  UNLIKE_SCREAM,
  LOADING_DATA,
  DELETE_SCREAM,
  POST_SCREAM,
  SET_SCREAM,
  SUBMIT_COMMENT
} from '../types';

const initialState = {
  screams: [],
  scream: {},
};

export default function(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}
*/

import {
  SET_GAMES,
  SET_GAME,
  SET_REVIEWS
} from '../types';

const initialState = {
  games: [],
  game: {},
  reviews:[]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_GAMES:
      return {
        ...state,
        games: action.payload
      };
      case SET_GAME:
        return {
          ...state,
          game: action.payload
        };
      case SET_REVIEWS:
        return {
          ...state,
        reviews: action.payload
      };
    default:
      return state;
  }
}
