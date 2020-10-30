import axios from 'axios';
import { CLOSE_FORM, GET_CREATOR, GET_ERRORS, SHOW_FORM } from './types';

export const addCreator = data => dispatch => {
  axios
    .post('/api/add-game-creator', data)
    .then(res => dispatch(getCreator()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const getCreator = () => dispatch => {
  axios
    .get('/api/get-game-creator')
    .then(res =>
      dispatch({
        type: GET_CREATOR,
        payload: res.data,
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const updateCreator = id => dispatch => {
  axios
    .put(`/api/game-creator/${id}`)
    .then(() => dispatch(getCreator()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const deleteCreator = id => dispatch => {
  axios
    .delete(`/api/game-creator/${id}`)
    .then(() => dispatch(getCreator()))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const showAddForm = () => dispatch => {
  dispatch({
    type: SHOW_FORM,
  });
};
