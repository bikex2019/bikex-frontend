<template>
  <div id="app">
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

</style>

