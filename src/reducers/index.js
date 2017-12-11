import { combineReducers } from 'redux'
import  libraryReducer  from './LibraryReducer';
import  selectReducer from './SelectionReducer';

export default combineReducers({
  libraries: libraryReducer,
  selectionId: selectReducer
});