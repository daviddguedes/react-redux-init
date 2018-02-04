const SIGNUP = 'SIGNUP'

export const doSignup = (authData) => {
   return (cb) => {
      retornoSuccess(authData, cb)
   }
}

const retornoSuccess = (authData, cb) => {
   cb({
      type: SIGNUP,
      payload: authData
   })
}