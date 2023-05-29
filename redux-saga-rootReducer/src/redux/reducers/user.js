import * as types from '../types'

const initialState = {
  users: [],
  loading: false,
  error: null,
}

// every reducer take two parameters: initialState and Action
export default function users(state = initialState, action) {

  // A função usa switch para validar o tipo de ação (action.type) e executar o código depedendo do tipo de ação.

  switch (action.type) {
    case types.GET_USERS_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    case types.GET_USERS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message
      }
    default:
      return state;
  }
}
