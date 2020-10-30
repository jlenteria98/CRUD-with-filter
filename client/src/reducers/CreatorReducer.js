import { CLOSE_FORM, GET_CREATOR, SHOW_FORM } from '../action/types';

const initialState = {
  creator: [],
  showForm: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CREATOR:
      return {
        ...state,
        creator: action.payload,
        showForm: false,
      };
    case SHOW_FORM:
      return {
        ...state,
        showForm: true,
      };

    default:
      return state;
  }
}
