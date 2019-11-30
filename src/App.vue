<template>
  <div id="app">
    <div class="container col-md-12 text-center bg-top">
      <strong>
      <p class="bg-red m-0 p-0">This is the Beta Release</p>
      <p class="bg-red m-0 p-0">(Booking Unavailable Check Offline)</p>
      </strong>
    </div>
    <navigation></navigation>
  <div class="contents">
    <router-view></router-view>
  </div>
<myfooter></myfooter>
  </div>
</template>

<script>
import navigation from './components/navigation'
import myfooter from './components/footer'
export default {
  name: 'app',
  data(){
    return{
    }
  },
  components: {
    navigation,
    myfooter
  },
  mounted () {
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
</style>

