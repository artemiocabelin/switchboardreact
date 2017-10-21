import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import ButtonListReducer from './reducer_button_list';

const rootReducer = combineReducers({
  boardStatus: ButtonListReducer
});

export default rootReducer;
