const INITIAL_STATE = {
   username: 'daviddguedes',
   email: 'guedes0379@gmail.com'
}

export default (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case 'SIGNUP':
         return {
            ...state,
            username: action.payload.username,
            email: action.payload.email
         }

      default:
         return state
   }
}