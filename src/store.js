import Vue from "vue";
import Vuex from "vuex";
import VueResource from 'vue-resource';
const axios = require('axios');

Vue.use(Vuex, VueResource);


export default new Vuex.Store({
state: {
    faqs: [],
    vehicles:[],
    scooters:[],
    commuters:[],
    adventurer:[],
    models:[],
    display_images:[],
    display_image_array:[],
    loading:true,
    logged:false
    },
  mutations: {
    LOAD_STATUS(state, value){
        state.loading = value
    },
    FETCH_FAQ(state, faqs) {
      state.faqs = faqs;
    },
    FETCH_VEHICLES(state, vehicles){
        state.vehicles = vehicles
    },
    FETCH_SCOOTERS(state, scooters){
      state.scooters = scooters
    },
    FETCH_COMMUTERS(state, commuters){
      state.commuters = commuters
    },
    FETCH_ADVENTURER(state, adventurer){
      state.adventurer = adventurer
    },
    FETCH_MODELS(state, models){
        state.models = models
    },
    FETCH_DISPLAY_IMAGES(state, display_images){
        state.display_images = display_images
    },
    FETCH_IMAGES_ARRAY(state, display_image_array){
      state.display_image_array = display_image_array
  },
    IS_LOGGED_IN(state, value){
      state.loggedin = value
    }
  },
  actions: {
    log_out({commit}){
      localStorage.removeItem('token')
      localStorage.removeItem('temp')
      commit('IS_LOGGED_IN', false);
    },
    loadFaq({commit}) {
      axios.get('https://backend-bikex.herokuapp.com/api/faq').then(result => {
        commit('FETCH_FAQ', result.data);
        commit('LOAD_STATUS', false);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    load_live_Vehicles({commit}) {
        axios.get('https://backend-bikex.herokuapp.com/api/fetch/live-vehicle').then(result => {
          commit('FETCH_VEHICLES', result.data);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    },
    load_scooters({commit}) {
      axios.get('https://backend-bikex.herokuapp.com/api/fetch/live-vehicle/scooters').then(result => {
        commit('FETCH_SCOOTERS', result.data);
        commit('LOAD_STATUS', false);

      }).catch(error => {
        throw new Error(`API ${error}`);
      });
      },
      load_commuters({commit}) {
        axios.get('https://backend-bikex.herokuapp.com/api/fetch/live-vehicle/commuters').then(result => {
          commit('FETCH_COMMUTERS', result.data);
          commit('LOAD_STATUS', false);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
      },
      load_adventurer({commit}) {
        axios.get('https://backend-bikex.herokuapp.com/api/fetch/live-vehicle/adventurer').then(result => {
          commit('FETCH_ADVENTURER', result.data);
          commit('LOAD_STATUS', false);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
      },
      load_models({commit}) {
          axios.get('https://backend-bikex.herokuapp.com/api/models').then(result => {
            commit('FETCH_MODELS', result.data);
            commit('LOAD_STATUS', false);
          }).catch(error => {
            throw new Error(`API ${error}`);
          });
      },
      load_display_images({commit}) {
          axios.get('https://backend-bikex.herokuapp.com/api/upload-display').then(result => {
            commit('FETCH_DISPLAY_IMAGES', result.data.data);
          }).catch(error => {
            throw new Error(`API ${error}`);
          });
      },
      load_images_array({commit}) {
        axios.get('https://backend-bikex.herokuapp.com/api/uploads/get/images').then(result => {
          commit('FETCH_IMAGES_ARRAY', result.data);
          commit('LOAD_STATUS', false);
        }).catch(error => {
          throw new Error(`API ${error}`);
        });
    }
    },
  getters:{
    vehicle(state) {
      return id => state.vehicles.filter(item =>{
        return item.vehicle_id === id
      });
    },
    similar_vehicle(state){
      return (id, v_id) => state.vehicles.filter(item =>{
        return item.model_id.make === id && item.vehicle_id != v_id
      });
    },
    images_array(state) {
      return id => state.display_image_array.filter(item =>{
        return item.vehicle_id === id
      });
    },
  }
});
