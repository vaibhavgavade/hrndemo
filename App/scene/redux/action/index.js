import {FETCH_STARTED, FETCHING_SUCCESS, FETCHING_FAIL} from './type';
import axios from 'axios';
export const fetchData = () => (dispatch) => {
  const Api = `https://run.mocky.io/v3/e6daf7f7-9ec2-42cf-b221-ef64f1c0c6a5`;
  const request = axios.get(Api);
  dispatch({
    type: FETCH_STARTED,
  });
  request
    .then((resdata) => {
      dispatch({
        type: FETCHING_SUCCESS,
        payload: resdata.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCHING_FAIL,
        payload: err,
      });
    });
};
