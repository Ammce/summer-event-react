import { LOAD_DATA, SET_LOADING, SET_SELECTED_CONNECTION } from './types';

const initialState = {
  isLoading: false,
  isDataPersistant: false,
  data: {},
  selectedConnection: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_SELECTED_CONNECTION:
      return {
        ...state,
        selectedConnection: action.payload,
      };
    case LOAD_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
