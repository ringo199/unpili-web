import {
  FETCH_VIDEO_LIST,
  FETCH_VIDEO_LIST_FAIL,
  FETCH_VIDEO_LIST_SUCCESS,

  FETCH_ONE_VIDEO,
  FETCH_ONE_VIDEO_FAIL,
  FETCH_ONE_VIDEO_SUCCESS,
} from '../../constants/ActionTypes';

export function fetchVideoList () {
  return {
    type: FETCH_VIDEO_LIST
  };
}

export function fetchVideoListSuccess (payload) {
  return {
    type: FETCH_VIDEO_LIST_SUCCESS,
    payload
  };
}

export function fetchVideoListFail () {
  return {
    type: FETCH_VIDEO_LIST_FAIL,
  };
}

export function fetchOneVideo (payload) {
  return {
    type: FETCH_ONE_VIDEO,
    payload
  };
}

export function fetchOneVideoFail (payload) {
  return {
    type: FETCH_ONE_VIDEO_FAIL,
    payload
  };
}

export function fetchOneVideoSuccess (payload) {

  return {
    type: FETCH_ONE_VIDEO_SUCCESS,
    payload
  };
}
