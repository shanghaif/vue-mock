import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store =  new Vuex.Store({
     state:{
        //存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization'):'',
        userId:''
     },
     mutations:{
         //修改token,并将token存入localstorage
        changeLogin(state,user){
          console.log(user,'vuex的登录信息')
            state.Authorization = user.Authorization;
            state.userId = user.userId
            localStorage.setItem('Authorization',user.Authorization);
            localStorage.setItem('userId',user.userId);
        }
     }
 });
 export default store;