<template>
  <div id="app">
    <!-- <div class="container col-md-12 text-center bg-top" v-if="demo">
      <div class="row p-0 m-0">
        <div class="col-md-11 m-0 p-0">
        <strong>
          <p class="bg-red m-0 p-0">This is the Beta Release</p>
          <p class="bg-red m-0 p-0">(Booking Unavailable Check Offline)</p>
        </strong>
        </div>
         <div class="col-md-1 col-1 m-0 p-0 pt-1 close text-right" v-on:click="demo =! demo">
             <i class="fa fa-times" style="font-size:14px;"></i>
        </div>
     </div>
    </div> -->
    <navigation></navigation>
  <div class="contents">
    <router-view></router-view>
  </div>
<myfooter></myfooter>
<support></support>
  </div>
</template>

<script>
import navigation from './components/navigation'
import myfooter from './components/footer'
import support from './components/supportbutton'
export default {
  name: 'app',
  data(){
    return{
          demo:true
    }
  },
  components: {
    navigation,
    myfooter,
    support
  },
  mounted () {
    this.$store.dispatch('load_scooters');
    this.$store.dispatch('load_images_array');
    this.$store.dispatch('load_display_images');
      // this.$store.dispatch('load_display_images');
  this.$store.dispatch('load_live_Vehicles');
  // this.$store.dispatch('load_images_array');
  },
  beforeDestroy () {
  },
  methods:{
       
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monda|Montserrat&display=swap');
@media only screen and (max-width: 600px) {
  .displayblock{
    display: block !important
  }
  .contents{
    margin-top: 50px !important;
  }
}
.contents{
  margin-top: 10px;
}
#myBtn {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 10px;
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #ffb52f;
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 4px;
}
.bg-red{
  color: white;
  text-transform: uppercase;
  font-size: 15px;
}
.bg-top{
  background-color: #ffb52f
}
.close{
  cursor: pointer;
}

</style>

