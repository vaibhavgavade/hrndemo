import {combineReducers} from 'redux';
import {LoaderReducer} from '../reducer/index';
export const reducer = combineReducers({
  load: LoaderReducer,
});
