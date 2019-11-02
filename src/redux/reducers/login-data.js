const initialState = {
  currentUser: null,
  userPhoto: null,
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'UPDATE_CURRENTUSER':
      return {
        ...state,
        currentUser: payload.currentUser,
        userPhoto: payload.userPhoto,
      };
    default: return state;
  }
};
