import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        name:'奥利奥',
        age:'18'
    },
    mutations:{
        showPeople(state,msg){
            state.age = msg
        }
    }
})

export default store