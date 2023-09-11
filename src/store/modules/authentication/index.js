const state = () => {
    return {
        loggedIn: false,
        user: undefined
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    getters,
    state
}