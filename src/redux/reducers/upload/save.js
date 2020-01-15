import {
  FETCH_UPLOAD_SAVE,
  FETCH_UPLOAD_SAVE_FAIL,
  FETCH_UPLOAD_SAVE_SUCCESS
} from '../../../constants/ActionTypes';

const initialState = {
  form: {}
};

const save = (state = initialState, { type, payload }) => {
  console.log('payload', type, payload);
  
  switch (type) {
    case FETCH_UPLOAD_SAVE:
    case FETCH_UPLOAD_SAVE_FAIL:
      return initialState;
    case FETCH_UPLOAD_SAVE_SUCCESS:
      return {
        ...state
        // ...payload
      };
    default:
      return state;
  }
};

export default save;
