import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

Vue.use(Vuex, VueRouter);

export default new Vuex.Store({
    state:{
        baseUrl:'https://backend-bikex.herokuapp.com/api',
        faqs:[],
    },
    actions: {
      get_faqs(){
        this.$http.get('https://backend-bikex.herokuapp.com/api/faq')
        .then(result=>{
            window.console.log(result)
        }).catch(error => {
            throw new Error(`API ${error}`);
          })
      }
  },
  mutations: {
        faqs_data(state, faqs) {
          state.faqs = faqs;
        }
      },
})