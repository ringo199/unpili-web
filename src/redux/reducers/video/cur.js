import {
  FETCH_ONE_VIDEO,
  FETCH_ONE_VIDEO_FAIL,
  FETCH_ONE_VIDEO_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  id: 0,
  title: '',
  cover: '',
  url: '',
  createUser: ''
};

const curVideo = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ONE_VIDEO:
      return {
        ...state,
        id: payload.id
      };
    case FETCH_ONE_VIDEO_FAIL:
      return initialState;
    case FETCH_ONE_VIDEO_SUCCESS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

export default curVideo;
