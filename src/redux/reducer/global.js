const initglobalState = {
  isError: false,
  message: 'Error Bro',
  isLoading: false,
};

export const globalReducer = (state = initglobalState, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      message: action.value.message,
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  return state;
};
