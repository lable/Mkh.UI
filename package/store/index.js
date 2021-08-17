import { createStore } from 'vuex'
import profile from './modules/profile'
import token from './modules/token'

let store = null

const useStore = app => {
  const options = {
    modules: {
      //系统模块
      app: {
        namespaced: true,
        modules: {
          profile,
          token,
        },
      },
      //业务模块
      mod: {
        namespaced: true,
        modules: {},
      },
      //皮肤
      skin: {
        namespaced: true,
        modules: {},
      },
    },
  }

  mkh.modules
    .filter(m => m.store)
    .forEach(m => {
      options.modules.mod.modules[m.code] = m.store
    })

  store = createStore(options)

  app.use(store)
}

export { store }

export default useStore
