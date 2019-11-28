<template>
<div class="col-md-10 margin">
   <div class="overview-area pb-4 text-left p-0 m-0">
                <div class="container p-0 m-0">
                    <div class="row p-0 m-0">
                        <div class="col-md-6 p-0 m-0">
                            <div class="overview-content">
                                <h1>WE SELL
                                  <span>RE</span><strong>FURBISHED</strong></h1>
                                <h2>BIKES IN <span>BENGALURU</span></h2>
                                <p><strong>BIKEX</strong> the most largest bike store in the woRld can serve you latest quality of motorcycle also you can sell here your motorcycle it quo minus iduod maxie placeat facere possimus, omnis voluptas assumenda est, omnis dolor llendus. Temporibus autem quibusdam </p>
                                    <!-- <h4>HAVE ANY QUESTION? </h4>
                                    <div class="question-contact">
                                        <div class="question-icon">
                                            <i class="fa fa-mobile" style="font-size:23px" aria-hidden="true"></i>
                                        </div>
                                        <div class="question-content-number">
                                            <h6>+91 9742744444</h6>
                                        </div>
                                    </div> -->
                                    <div class="question-area">
                                  <div class="button text-left mb-4 mt-4">
                                   <router-link to="/commuters"><button class="viewbikes-button">View Bikes</button></router-link>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <link rel="stylesheet" href="../assets/css/icofont.css">
                        <div class="col-md-6 p-0 m-0">
                            <div class="overview-img pl-3">
                                <img class="tilter m-0 p-0" src="../assets/BikeX_Hero_Image2.png"  alt="">
                            </div>
                              <!-- <button v-if="!isScrolled" v-on:click="downFunction()" class="btn" id="myBtn" title="Go to top">
                             <i class="fa fa-angle-down" aria-hidden="true"></i> -->
                             <!-- </button>
                              <button v-else v-on:click="topFunction()" class="btn" id="myBtn" title="Go to top">
                             <i class="fa fa-angle-up" aria-hidden="true"></i>
                             </button> -->
                        </div>
                    </div>
                </div>
            </div>

     <div class="banner-area mb-5 p-0 m-0">
                <div class="container p-0 m-0">
                    <div class="row p-0 m-0">
                        <div class="col-md-4 col-lg-4 p-2 m-0">
                            <div class="banner-wrapper mb-3">
                               <router-link to="/commuters">
                                  <a><img class="resize_fit_center" src="../assets/commuter1.jpg" alt="image"></a>
                                <div class="banner-content">
                                    <h2>COMMUTER</h2>
                                </div>
                               </router-link>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4 p-2 m-0">
                            <div class="banner-wrapper mb-3">
                               <router-link to="/traveller">
                                <a ><img class="resize_fit_center" src="../assets/traveller1.jpg" alt="image"></a>
                                <div class="banner-content">
                                    <h2>TRAVELLER</h2>
                                </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-4 p-2 m-0">
                            <div class="banner-wrapper mb-3">
                               <router-link to="adventurer">
                                  <a><img class="resize_fit_center" src="../assets/enfield.jpg" alt="image"></a>
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

        <div id="overlay" class="loading text-center mb-4" style="min-height:200px" v-if="load">
            <div id="text" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div>
</div>          
</template>
<script>
import values from '../components/values'
export default {
  data(){
    return{
      isScrolled:false,
      loading:true
    }
  },
  components:{
    values
  },
  beforeCreate(){
  },
    mounted () {
         window.scrollTo({
                top: 0,
                left: 0,
            })
      setTimeout(()=>{
         this.loading = false
          window.console.log(this.loading)
      }, 500)
  },
  beforeDestroy () {
  },
  computed:{
      load(){
        return this.loading
      }
  },
    methods:{
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monda|Montserrat&display=swap');
@import '../assets/css/loader.css';

.resize_fit_center{
  transition: transform 1.5s ease;
  width: 362px;
  height: 262px;
}
.resize_fit_center:hover {
    
  transform: scale(1.29);
  transition: 1.5s;/* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

@media only screen and (max-width: 780px) {
    .overview-content {
        margin-top: 25px !important;
        text-align: center;
    }
    .overview-content h1 , .overview-content h2 {
        color: #001232;
        font-weight: 400;
        font-size: 33px !important;
        letter-spacing: 0.8px;
        margin: 0;
    }
    #myBtn{
    display: none !important
    }
    .resize_fit_center{
    height: 50% !important;
    }
    .banner-area{
    border: 1px solid rgb(248, 248, 248, 0.8)
    }
    .question-area .button{
    text-align: center !important
    }
    .viewbikes-button{
    width:90% !important;
    padding: 12px 22px !important;
    letter-spacing: 0.7px;
    font-family: 'Montserrat', sans-serif;
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
    border-radius: 3px;
    opacity: 0.9;
    width: 40%;
    background-color:	 #ffb52f;
    box-shadow: none;
    color: white;
    padding: 8px 22px;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    border:none;
}
.viewbikes-button:hover{
  opacity: 1;
    background-color:	 #ffb52f;
    border-color: #ffb52f;
}
.margin{
    margin: 0 auto
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
    font-family: 'Montserrat', sans-serif;
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
  margin-top: 65px;
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
  font-weight: 300;
  margin: 0;
  width: 93%;
  letter-spacing: 0.6px
}
.overview-content > p span {
    color: #303030;
    font-weight: 600;
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