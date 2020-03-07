import queryString from 'query-string';

import axios from '../../../config/axios/axios';

import { LOAD_DATA, SET_LOADING } from './types';

const setLoading = value => {
  return {
    type: SET_LOADING,
    payload: value,
  };
};

export const loadData = (data, history) => async dispatch => {
  dispatch(setLoading(true));
  const response = await axios.get(
    `/connections?${queryString.stringify(data)}`,
  );
  if (response.status === 200) {
    dispatch(setLoading(false));
    dispatch({
      type: LOAD_DATA,
      payload: response.data,
    });
    history.push('/choose-route');
  }
};
