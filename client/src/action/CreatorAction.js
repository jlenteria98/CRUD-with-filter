import axios from 'axios';
import {
  GET_CREATOR,
  GET_ERRORS,
  IS_LOADING,
  SHOW_FORM,
  SHOW_UPDATE_FORM,
  SORT_BY_DATE,
  SORT_BY_FIRSTNAME,
  SORT_BY_LASTNAME,
} from './types';

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

export const updateCreator = (data, _id) => dispatch => {
  axios
    .put(`/api/game-creator/${_id}`, data)
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

export const showUpdateForm = () => dispatch => {
  dispatch({
    type: SHOW_UPDATE_FORM,
  });
};

export const isLoadingForm = () => dispatch => {
  dispatch({
    type: IS_LOADING,
  });
};

export const sortByDate = () => dispatch => {
  dispatch({
    type: SORT_BY_DATE,
  });
};
export const sortByFirstname = () => dispatch => {
  axios.get('/api/sort/firstname').then(res =>
    dispatch({
      type: SORT_BY_FIRSTNAME,
      payload: res.data,
    })
  );
};
export const sortByLastName = () => dispatch => {
  axios.get('/api/sort/lastname').then(res =>
    dispatch({
      type: SORT_BY_LASTNAME,
      payload: res.data,
    })
  );
};
export const sortByLastname = () => dispatch => {
  dispatch({
    type: SORT_BY_LASTNAME,
  });
};

export const pickCreator = (firstname, lastname) => dispatch => {
  axios
    .get(`/api/creator/${firstname}&${lastname}`)
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
