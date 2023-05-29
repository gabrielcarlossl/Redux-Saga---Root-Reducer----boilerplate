// USER ACTIONS

import * as types from "../types"

export function getUsers(users) {
 return {
  type: types.GET_USERS_REQUESTED,
  payload: users,
 }
}