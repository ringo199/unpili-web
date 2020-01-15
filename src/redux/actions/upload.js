import {
  FETCH_UPLOAD_SAVE,
  FETCH_UPLOAD_SAVE_FAIL,
  FETCH_UPLOAD_SAVE_SUCCESS
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
