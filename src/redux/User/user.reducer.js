import userTypes from './user.types'

const INITIAL_STATE = {
  currentUser: null,
}
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_WITH_GOOGLE:
      return {
        ...state,
        currentUser: action.payload,
      }
    case userTypes.SIGN_UP_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    case userTypes.SIGN_IN_WITH_FACEBOOK:
      return {
        ...state,
        currentUser: action.payload,
      }

    default:
      return state
  }
}
export default userReducer
