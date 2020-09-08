import {FETCH_STARTED, FETCHING_SUCCESS, FETCHING_FAIL} from '../action/type';
const INITIAL_STATE = {
  dataSource: {},
  isLoading: false,
  error: '',
};
export const LoaderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_STARTED: {
      return {
        ...state,
        isLoading: (state.isLoading = true),
      };
    }
    case FETCHING_SUCCESS: {
      return {
        ...state,
        dataSource: action.payload,
        isLoading: false,
      };
    }
    case FETCHING_FAIL: {
      return {
        ...state,
        error: 'fail data fetching',
        isLoading: (state.isLoading = true),
      };
    }
    default: {
      return state;
    }
  }
};
