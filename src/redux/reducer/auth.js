import {act} from 'react-test-renderer';

const initStateRegister = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
      email: action.value.email,
      password: action.value.password,
      password_confirmation: action.value.password_confirmation,
    };
  }
  return state;
};

const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUpload: false,
};
export const photoReducer = (state = initPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.fileName,
    };
  }
  if (action.type === 'SET_UPLOAD_STATUS') {
    return {
      ...state,
      isUpload: action.value,
    };
  }
  return state;
};
