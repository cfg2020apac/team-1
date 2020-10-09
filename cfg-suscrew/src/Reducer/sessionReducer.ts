const sessionReducer = (state = { userId: null, role: null }, action: any) => {
  switch (action.type) {
    case 'SET_SESSION':
      return { userId: action.payload.userId, role: action.payload.role };
    default:
      return state;
  }
};

export default sessionReducer
