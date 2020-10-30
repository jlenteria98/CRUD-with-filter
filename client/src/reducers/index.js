import { combineReducers } from 'redux';
import CreatorReducer from './CreatorReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  creators: CreatorReducer,
  error: ErrorReducer,
});
