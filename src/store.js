import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        baseUrl:'https://backend-bikex.herokuapp.com/api',
        faqs:[],
    },
    mutations: {
        faqs_data(state, faqs) {
          state.faqs = faqs;
        }
      },
  actions: {
      get_faqs(){
        this.$http.get(this.baseUrl+'/faq')
        .then(result=>{
            this.commit('faqs_data', result.data);
        }).catch(error => {
            throw new Error(`API ${error}`);
          })
      }
  }
})