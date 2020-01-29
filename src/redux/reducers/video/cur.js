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
  createTime: 0,
  createNickname: '',
  createAvatar: '',
  createDescription: '',
  loading: true
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
        ...payload,
        loading: false
      };
    default:
      return state;
  }
};

export default curVideo;
