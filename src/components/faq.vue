<template>
    <div class = "faq col-md-8 mb-5 mt-3 text-center" style="margin:0 auto">
         <h4><STRONG>FAQ</STRONG></h4>

       <div class="container mb-3" v-for="(faqs, index) in faq" :key="index">
            <button class="accordion" v-on:click="openaccord(faqs._id)">{{faqs.question}}
            <p class="pull-right m-0 p-0" v-if="id==faqs._id">
            <i class="fa fa-angle-up" aria-hidden="true"></i>
            </p>
            <p class="pull-right m-0 p-0" v-else>
           <i class="fa fa-angle-down" aria-hidden="true"></i>
            </p>
        </button>
        <div class="panel text-left" v-bind:class="{panel100: id == faqs._id}">
        <p class="pt-4 pb-0">{{faqs.answer}}</p>
        </div>
       </div>

        <div class="loading text-center mt-4 mb-4" v-if="!loading && faq.length == 0">
              <p>We're adding up contents soon..</p>
              <p>Feel free to come back again !</p>
        </div>

       <div class="loading text-center mt-4 mb-4" style="min-height:200px" v-if="loading">
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
       return{
           id:0,
           expand: false,
       }
    },
    created(){
        this.$store.dispatch('loadFaq');
    },
     mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
            })
    },
    methods:{
        openaccord(id){
            if(this.id != id){
                this.id = id
               
            }else{
                this.id = 0
            }
        }
    },
    computed:{
      faq(){
        return this.$store.state.faqs;
      },
      loading(){
        return  this.$store.state.loading
      }
    }

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
.accordion {
  color: #444;
  background-color: transparent;
  cursor: pointer;
  padding: 18px 0px 18px 0px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  transition: 0.2s;
  border-bottom: 1px solid rgb(138, 117, 117,0.2)
}

.active, .accordion:hover {
  border-bottom: 1px solid #ffb52f
}

.panel {
  height: 0px;
  font-size: 15px;
  background-color: rgb(255, 255, 255);
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
}
.panel100{
  animation: expand 1s;
  height:100%;
   
}

  @keyframes expand {
      0% {
      opacity: 0;
      }
      100% {
      opacity: 1;
      }
      }

/* loading */
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(233, 227, 227, 0.8);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: black;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}

.loader::before{
    content: '';
      display: block;
      --color:#ffb52f;
      width: 100px;
      height: 100px;
      background-color: var(--color);
      animation: rotate 3s infinite;
  }
  .loader{
    --color: #5d62bd;
    width: 100px;
    height: 100px;
    background-color: var(--color);
    outline: 6px solid var(--color);
    outline-offset: -1px;
    transform: rotate(45deg) scale(0.5);
  }
  @keyframes rotate {
      0% {
      transform-origin: bottom left;
      transform: translate(-5px, -105px) rotate(0deg) scale(1.1)
      }
      25% {
      transform-origin: bottom left;
      transform: translate(-5px, -105px) rotate(-180deg) scale(1.1);
      }
      26% {
      transform-origin: top left;
      transform: translate(-5px, 105px) rotate(-180deg) scale(1.1)
      }
      50% {
      transform-origin: top left;
      transform: translate(-5px, 105px) rotate(-360deg) scale(1.1);
      }
      51% {
      transform-origin: top right;
      transform: translate(5px, 105px) rotate(-360deg) scale(1.1)
      }
      75% {
      transform-origin: top right;
      transform: translate(5px, 105px) rotate(-540deg) scale(1.1)
      }
      76% {
      transform-origin: bottom right;
      transform: translate(5px, -105px) rotate(-540deg) scale(1.1)
      }
      100% {
      transform-origin: bottom right;
      transform: translate(5px, -105px) rotate(-720deg) scale(1.1)
      }
  }
  
</style>