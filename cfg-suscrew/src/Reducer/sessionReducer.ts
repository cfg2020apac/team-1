const sessionReducer = (state = { userId: null, role: null }, action: any) => {
  switch (action.type) {
    case 'SET_SESSION':
      return { userId: action.payload.userId, role: action.payload.role };
    case 'CLEAR_SESSION':
      return { userId: null, role: null };
    default:
      return state;
  }
};

export default sessionReducer;
