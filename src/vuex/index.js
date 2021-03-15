import { createStore } from 'vuex'

const store = createStore({
    state: {
        activeMenu: 'home'
    },
    mutations: {
        setActiveMenu (state, data) {
            state.activeMenu = data
        }
    }
})

export default store