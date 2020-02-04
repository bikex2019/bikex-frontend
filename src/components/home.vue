<template>
<div class="col-md-10 margin">

<div id="carouselExampleIndicators" class="carousel slide mt-3" data-ride="carousel">
  <ol class="carousel-indicators" v-for="(data, index) in banners" :key="index">
    <li data-target="#carouselExampleIndicators" :data-slide-to="index" v-bind:class="{'active': index == 0}"></li>
    <!-- <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> -->
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item" v-bind:class="{'active': index == 0}" v-for="(data, index) in banners" :key="index">
      <img class="d-block w-100" :src="data.path" >
    </div>
    
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <img src="../assets/left-arrow.svg" class="svg" width="40px">
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
   <img src="../assets/right-arrow.svg" class="svg" width="40px">
  </a>
</div>

   <div class="overview-area text-left">
                <div class="container p-0 m-0">
                    <div class="row p-0 m-0">
                        <div class="col-md-6 ipad-col-4 p-0 m-0 background">
                            <div class="overview-content mobile-top">
                                <!-- <h1>HANDPICKED
                                  <span>RE</span><strong>FURBISHED</strong></h1>
                                <h2>TWO-WHEELERS AT <span>FIXED PRICE</span></h2>
                                <p class="monte"><strong>High quality</strong> 
                                 ‘one of a kind’ preloved two-wheelers - one of its kind to sell a ‘branded’ two-wheelers online.
                                  At BikeX, you are only a few clicks away from owning a high quality ‘branded’ refurbished two-wheeler at a FIXED price - includes the basic price, refurbishment cost, insurance and registration costs.
                                 We make buying a two-wheeler an unforgettable experience - choose a two-wheeler, experience it, buy it, ride it away!</p>

                                 <p class="mt-4 no-mobile">
                                     In our store, every handpicked bike comes with a story of its own. You get to create a new one.
                                 </p> -->
                                    <div class="question-area">
                                  <div class="button text-left mb-4 mt-4">
                                   <router-link to="/scooter"><button class="viewbikes-button">View Bikes</button></router-link>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <link rel="stylesheet" href="../assets/css/icofont.css">
                        <div class="col-md-6 ipad-col-8 p-0 m-0 no-mobile">
                            <div class="overview-img pl-3">
                                <!-- <img class="tilter m-0 p-0" src="https://loader-image.s3.ap-south-1.amazonaws.com/Bikex_HERO.jpg"  alt=""> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>

     <div class="banner-area mb-4 m-0 p-0 mt-0" v-lazy-container="{ selector: 'img' }">
                <div class="container phone-center mb-4 m-0 p-0">
                    <p class="m-0 mb-4 p-0 mobile-top" style="font-size:19px"><strong>EXPLORE OUR SELECTION</strong></p>
                    <div class="row p-0 m-0">
                        <div class="col-md-4 col-4 col-lg-4 pl-0 pr-2 m-0">
                            <div class="banner-wrapper mb-3">
                               <router-link to="/scooter">
                                  <a><img class="resize_fit_center" :data-src="images.scooter" alt="image"></a>
                                <div class="banner-content">
                                    <h2>SCOOTER</h2>
                                </div>
                               </router-link>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 col-lg-4 pl-0 pr-1 m-0">
                            <div class="banner-wrapper mb-3">
                               <router-link to="/commuter"> 
                                <a ><img class="resize_fit_center" :data-src="images.commuter" alt="image"></a>
                                <div class="banner-content">
                                    <h2>COMMUTER</h2>
                                </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-4 col-4 col-lg-4 pl-1 p-0 m-0">
                            <div class="banner-wrapper mb-3">
                               <router-link to="adventurer">
                                  <a><img class="resize_fit_center" :data-src="images.adventurer" alt="image"></a>
                                <div class="banner-content">
                                    <h2>ADVENTURER</h2>
                                </div>
                               </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <values></values>  
</div>          
</template>
<script>
import values from '../components/values'
export default {
  data(){
    return{
      isScrolled:false,
      banners:[]
    }
  },
  components:{
    values
  },
  created(){
                  this.$store.dispatch('fetch_banner')
                  window.console.log(this.banners)
  },
    mounted () {
         window.scrollTo({
                top: 0,
                left: 0,
            })

            

             this.$http.get('https://backend-bikex.herokuapp.com/api/banners/visible').then((res)=>{
                 window.console.log(res.data.banners)
                 this.banners = res.data.banners
             })
  },
  beforeDestroy () {
  },
  computed:{
      load(){
        return this.loading
      },
      images(){
            return this.$store.state.assets_images
      },
    //   banners(){
    //         return this.$store.state.banners
    //   }
  },
    methods:{
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monda|Montserrat&display=swap');
@import '../assets/css/loader.css';

.carousel-control-next, .carousel-control-prev {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 1;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 5%;
    color: #ffb52f;
    /* box-shadow: 5px 10px #888888; */
    text-align: center;
    opacity: 0.5;
    transition: opacity .15s ease;
}

@media (min-width: 1200px){
.container {
    max-width: 100% !important;
}
.resize_fit_center{
    width: 100% !important;
    height: auto;
}

.carousel-control-next, .carousel-control-prev {
  opacity: 0.9
}
}
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1){
    .overview-content h1, .overview-content h2 {
        color: #001232;
        font-weight: 400;
        font-size: 19px !important;
        margin: 0;
    }
    .overview-content > p{
        font-size: 12px !important;
        padding: 0;
        margin: 0;
        text-align: justify;
        color: #364d59;
    }
    .overview-content > h2 {
    margin: 6px 0 13px !important;
        }
        .resize_fit_center {
            width: auto !important;
             height: auto !important
        }
        .banner-content > h2[data-v-957c9522] {
    font-size: 20px !important;
        }
    .ipad-col-4{
        width: 33.33% !important;
    }
    .ipad-col-8{
        width: 66.66% !important;
    }
    .viewbikes-button{
        width: 50% !important
    }
    .overview-content{
        margin-top: 10px !important;
    }
      .col-md-10{
          width: 100% !important
      }
      .col-md-6{
          width: 33.33% !important
      }
  }
@media only screen and (max-width: 767px) {
    .resize_fit_center{
    transition: transform 1.5s ease;
    width: 362px;
    height: 262px;
    }
    .container {
    width: 100% !important;
    padding-right: 15px !important;
    padding-left: 15px !important;
    margin-right: auto !important;
    margin-left: auto !important;
}
    .overview-content {
        margin-top: 0px !important;
        text-align: center;
    }
    .mobile-margin{
        margin: 0px !important;
        padding: 0px !important
    }
    .phone-center{
        text-align: center
    }
    .margin{
        margin: 0px !important;
        padding: 0px !important
    }
    .banner-wrapper::after {
    border: none !important
    }
    .mobile-top{
        margin-top: 0px !important;
        margin-bottom: 0px !important
    }
    .background{
            /* background-color: black; */
    }
    .overview-area{
        /* background-color: rgba(231, 227, 161, 0.1); */
        /* background-image: url('../assets/back.png');  */
        /*   
        background-size: 115%;
      
        background-repeat: no-repeat;*/
          padding-bottom: 0px !important; 
            }
    .overview-content{
        padding: 0px !important
    }
    .overview-content h1 , .overview-content h2 {
        color: black !important;
        font-weight: 400;
        text-align: left;
        font-size: 24px !important;
        letter-spacing: 0.8px;
    }
    .overview-content > p {
    font-size: 14px !important;
    padding: 0;
    margin: 0 !important;
    text-align: justify;
    /* color: rgb(255, 255, 255) !important; */
    }
    .no-mobile{
        display: none !important
    }
    #myBtn{
    display: none !important
    }
    .resize_fit_center{
    height: 50% !important;
    }
    .banner-content {
    bottom: 19px !important;
    }
    .banner-content > h2 {
        font-size: 11px !important;
    }
    /* .banner-area{
    border: 1px solid rgb(248, 248, 248, 0.8);
    } */
    .question-area .button{
    text-align: center !important
    }
    .banner-wrapper{
        margin: 0 !important
    }
    .viewbikes-button{
    width:90% !important;
    padding: 12px 22px !important;
    font-size: 14px;
    font-weight: 400;
    height: inherit;
    letter-spacing: 1px;    
    }
}
#myBtn {
  z-index: 1;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #ffb52f;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-top: -50px;
}
#myBtn:focus{
  outline: none !important;
  box-shadow: none !important;
  border: none!important
}
.viewbikes-button{
    width: 40%;
    background-color:#ffb52f;
    box-shadow: none;
    font-size: 14px;
    font-weight: 700;
    height: inherit;
    letter-spacing: 1.2px;
    color: #001232;
    padding: 8px 22px;
    outline: none;
    text-transform: uppercase;
    border:none;
}
.viewbikes-button:hover{
  opacity: 0.9;
}
.margin{
    margin: 0 auto;
}
 .resize_fit_center {
    max-width:100%;
    max-height:100%;
    vertical-align: middle;
}
.question-area > h4 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}
.question-area {
    margin-top: 30px;
}
.question-area > h4 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
}
.question-icon {
    background-color: #ffb52f;
    display: inline-block;
    padding: 10px 14px 10px 13px;
}
.question-icon i {
    color: #001232;
    display: inline-block;
    font-size: 30px;
}
.question-contact {
    background-color: #001232;
    display: inline-block;
    margin: 10px 0 0;
}
.question-content-number {
    display: inline-block;
}
.question-content-number > h6 {
    
    color: #ffffff;
    font-weight: bold;
    font-size: 22px;
    padding: 8px 15px 11px 13px;
    margin: 0;
}
.question-area {
    margin-top: 30px;
}


.icofont-phone-circle:before {
	content: "\f09b";
}
.icofont-phone:before {
	content: "\f09c";
}

.data-tilt{
    transform-style: preserve-3d ;
transform: translateZ(20px);
}


.overview-img img {
    width: 90%;
    cursor: pointer;
}
.overview-content{
  margin-top: 0px;
}
.overview-content h1 , .overview-content h2 {
    color: #001232;
    font-weight: 400;
    font-size: 36px;
    margin: 0;
}
.overview-content h1 span {
    color: #ffb52f;
    font-weight: 700;
}
.overview-content h2 span {
    font-weight: 700;
}
.overview-content > h2 {
    margin: 6px 0 40px;
}
.overview-content > p {
    font-size: 15px;
    padding: 0;
    margin: 0;
    text-align: justify;
    color: #364d59;
}
.overview-content > p span {
    color: #303030;
    font-size: 16px;
}
.banner-wrapper::after {
  bottom: 10px;
  left: 10px;
  right: 10px;
  top: 10px;
}    
.banner-content > h2 {
  font-size: 22px;
}
    
 .banner-wrapper.mrg-mb-md {
        margin-bottom: 30px;
    }
.banner-wrapper::after {
        bottom: 20px;
        left: 20px;
        right: 20px;
        top: 20px;
    }   .banner-wrapper {
    position: relative;
    overflow: hidden;
}
.banner-wrapper::before {
    position: absolute;
    content: "";
    background-color: #001232;
    opacity: .65;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}
.banner-wrapper::after {
    border: 1px solid #76818c;
    bottom: 40px;
    content: "";
    left: 40px;
    position: absolute;
    right: 40px;
    top: 40px;
    transition: all 0.4s ease 0s;
    z-index: 9;
    pointer-events: none;
}
.banner-content {
    position: absolute;
    bottom: 60px;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 99;
    padding: 10px;
}
.banner-content > h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 28px;
    letter-spacing: .3px;
    margin: 0;
}
.banner-wrapper:hover::after{
    left: 20px;
    bottom: 20px;
    right: 20px;
    top: 20px;
}
.banner-wrapper:hover .banner-content > h2 {
    animation: 700ms running zoomIn;
}
.banner-content{
    cursor: pointer;
    
}
.banner-content >h2:hover{
 color: #ffb52f
}
.banner-content > h2 {
    color: #ffffff;
    font-weight: bold;
    font-size: 28px;
    letter-spacing: .3px;
    margin: 0;
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
  background-color: rgba(233, 227, 227, 0.3);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
}


</style>