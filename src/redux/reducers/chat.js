const initialState = {
  chat: {
    General: [{ user: 'Bot', msg: 'Escribe un mensaje', topic: 'General' }],
    Advanced: [{ user: 'Bot', msg: 'Escribe un mensaje', topic: 'Advanced' }],
  },
  topics: ['General', 'Advanced'],
};

export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        chat: {
          ...state.chat,
          [payload.topic]: [
            ...state.chat[payload.topic],
            {
              msg: payload.msg,
              user: payload.user,
              img: payload.img,
            },
          ],
        },
      };
    default: return state;
  }
};
