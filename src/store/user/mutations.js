import types from './mutationTypes'

export default {
  [types.SET_TOKEN]: (state, token) => {
    state.token = token
  },
  [types.SET_NAME]: (state, name) => {
    state.name = name
  },
  [types.SET_AVATAR]: (state, avatar) => {
    state.avatar = avatar
  },
  [types.SET_ROLES]: (state, roles) => {
    state.roles = roles
  }
}