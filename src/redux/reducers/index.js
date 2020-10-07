import { combineReducers } from 'redux';
import common from './commonReducer';

const rootReducer = combineReducers({
    common
});

export default rootReducer;