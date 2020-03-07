import { LOAD_DATA, SET_LOADING } from './types';

const initialState = {
  isLoading: false,
  isDataPersistant: false,
  data: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
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
