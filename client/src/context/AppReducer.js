export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'USER_DATA':
      return {
        ...state,
        user: action.payload,
      };
    case 'IS_AUTH':
      return {
        isAuthenticated: action.payload,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
