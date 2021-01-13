import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization'):''
  },
  getters:{
    getCount: state => state.count
  },
  mutations: {
     //修改token,并将token存入localstorage
     changeLogin(state,user){
        state.Authorization = user.Authorization;
        this.cookie.set('Authorization',user.Authorization);
    },
    // jiaGetCount(state){
    //   state.count ++
    // },
    // jianGetCount(state,nums){
    //   state.count -= nums
    // }
  },
  actions: {
    CHANGE_LOGIN(context,token){
      context.commit('changeLogin')
    }
    // jiaCount(context){
    //   context.commit('jiaGetCount')
      
    // },
    // jianCount(context,nums){
    //   context.commit('jianGetCount',nums)
    // }
  },
  modules: {
  }
})
