import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { getToken } from "../../utils/auth";

const state = {
  token: getToken()
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}