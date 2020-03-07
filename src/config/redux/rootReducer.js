import { combineReducers } from 'redux';

import connectionsReducer from '../../modules/Connections/_redux/reducer';

export default combineReducers({
  connections: connectionsReducer,
});
