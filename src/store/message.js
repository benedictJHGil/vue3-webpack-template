export default {
    // module!
    namespaced: true,
    // data!
    state: () => ({
        msg: 'Hello Vuex??'
    }),
    // computed!
    getters: {

    },
    // methods!
    // 변이 (이 부분을 통해서만 데이터 수정 가능)
    mutations: {
        ubdateState(state, payload) {
            state.msg = payload
        }
    },
    // 비동기
    actions: {
        changeMessage(context, payload) {
            const { state, getters, commit } = context
            commit('updateState', payload)
            console.log(state.msg)
        }
    }
}