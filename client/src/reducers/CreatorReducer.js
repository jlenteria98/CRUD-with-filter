import {
  SHOW_UPDATE_FORM,
  GET_CREATOR,
  SHOW_FORM,
  IS_LOADING,
  SORT_BY_DATE,
  SORT_BY_FIRSTNAME,
  SORT_BY_LASTNAME,
} from '../action/types';

const initialState = {
  creator: [],
  showForm: false,
  showUpdate: false,
  isLoading: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CREATOR:
      return {
        ...state,
        creator: action.payload,
        showForm: false,
        showUpdate: false,
        isLoading: false,
      };
    case SHOW_FORM:
      return {
        ...state,
        showForm: true,
      };
    case SHOW_UPDATE_FORM:
      return {
        ...state,
        showUpdate: true,
      };
    case IS_LOADING:
      return { ...state, isLoading: true };

    case SORT_BY_DATE:
      return {
        ...state,
        creator: action.payload,
      };
    case SORT_BY_FIRSTNAME:
      return {
        ...state,
        creator: action.payload,
      };
    case SORT_BY_LASTNAME:
      return {
        ...state,
        creator: action.payload,
      };
    default:
      return state;
  }
}
