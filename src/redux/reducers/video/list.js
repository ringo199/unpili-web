import {
  FETCH_VIDEO_LIST,
  FETCH_VIDEO_LIST_FAIL,
  FETCH_VIDEO_LIST_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  rows: []
};

const list = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_VIDEO_LIST:
    case FETCH_VIDEO_LIST_FAIL:
      return {
        ...state
      };
    case FETCH_VIDEO_LIST_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default list;
