import {
  FETCH_UPLOAD_SAVE,
  FETCH_UPLOAD_SAVE_FAIL,
  FETCH_UPLOAD_SAVE_SUCCESS,

  TEMP_USER_INFO
} from '../../constants/ActionTypes';

export function fetchUploadSave () {
  return {
    type: FETCH_UPLOAD_SAVE
  };
}

export function fetchUploadSaveSuccess (payload) {
  return {
    type: FETCH_UPLOAD_SAVE_SUCCESS,
    payload
  };
}

export function fetchUploadSaveFail () {
  return {
    type: FETCH_UPLOAD_SAVE_FAIL,
  };
}

export function tempUserInfo (payload) {
  return {
    type: TEMP_USER_INFO,
    payload
  };
}
