<template>
<div class="product-display" style="margin:0 auto">
  <div class="display-mobile col-12 m-0 p-0">
    <carousel :perPage="1" :loop="true" paginationActiveColor="#ffb52f">
      <slide v-for="(image, index) in images" @slideclick="handleSlideClick(image)" :key="index">
        <div class="image text-center">
          <img :src="'http://localhost:3000/myImages/bikexImages/'+ image" width="auto" height="200px">
        </div>
      </slide>
    </carousel>
  </div>
  <div id="myModalMobile" class="modalmobile" v-bind:class="{'block': isExpand}">
  <span class="closemobile" v-on:click="closemobileModal">&times;</span>
  <img class="modal-content-mobile" id="img01" :src="'http://localhost:3000/myImages/bikexImages/'+ expandedImage">
</div>

  <div class="display-laptop mt-0 pt-0 m-0 p-0">
    <div class="row m-0 p-0 c">
        <!-- <img :src="'http://localhost:3000/myImages/bikexImages/'+ image" v-on:click="openModal(index);"> -->
        <div class="image-container" v-for="(image, index) in images" :key="index">
                   <img :src="'http://localhost:3000/myImages/bikexImages/'+ image" v-on:click="openModal(index);">
        </div>
    </div>
     <div class="load" v-if="images.length == 0">
              <div class="loading text-center mb-4" style="min-height:300px">
                <div class="spinner-border" role="status" style="margin-top:10%">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
        </div>

    <div id="myModal" class="modal mt-4" v-bind:class="{ 'block': displayBlock }">
      <div class="modal-content">
        <div class="mySlides text-center">
          <span class="close cursor" v-on:click="closeModal"><i class='fa fa-times' style='font-size:48px;color:#ffb52f'></i></span>
          <div class="numbertext">
            <p>{{currentSlide + 1}} / {{images.length}}</p>
          </div>
            <img :src="'http://localhost:3000/myImages/bikexImages/'+ images[currentSlide]" style="width:auto" height="465px" class="image-modal">
        </div>
        <a class="prev" v-on:click="minusSlides()"><i class='fa fa-angle-left' style='font-size:48px;color: #ffb52f'></i></a>
        <a class="next" v-on:click="plusSlides()"><i class='fa fa-angle-right' style='font-size:48px;color: #ffb52f'></i></a>
        <div class="preview mb-4">
          <div class="row p-0 m-0">
            <div class="col-md-1 p-0 m-0" v-for="(image, index) in images" :key="index" >
              <img class="demo cursor" :src="'http://localhost:3000/myImages/bikexImages/'+ image" style="width:auto" height="70px" v-on:click="openModal(index)" alt="Nature and sunrise">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="price-panel mr-0 pr-0 ml-0 col-12 col-md-12 mt-2 mb-1">
     <div class="row col-12 pr-0 mr-0">
        <div class="col-md-3 col-12 description">
        <h1 class="margin">{{product[0].name}}</h1>
        <p class="label">The power of all</p>
        </div>
         <div class="col-md-5 col-12 price">
        <p class="margin">Rs. 35000</p>
        <p class="label"><span style="color:#ffb52f">Down Payment</span> starts at 3500/month</p>
        </div>
        <!-- <div class="col-md-3 col-12">
           <button class="buttons">BOOK NOW</button>
        </div> -->
         <div class="col-md-4 display-laptop">
              <router-link to="/checkout"> <button class="buttons">BOOK NOW</button></router-link>
        </div>
        
         
        <div class="fixed-bottom display-mobile mobile-panel">
            <div class="row">
              <div class="col-12 p-0 m-0">
              <router-link to="/checkout"> <button class="buttons">BOOK NOW</button></router-link>
            </div>
            
        
             <!-- <div class="col-2 text-left ml-0 pl-3 mt-3 pr-4" v-on:click="wishlist(product[0].id)">
                <i class='far fa-heart ml-3' style='font-size:30px;color: #ffb52f'></i>
            </div> -->
            </div>
        </div>
     </div>
  </div>

  <div class="col-md-11 middle-align col-12 specification pt-4 pl-4">
    <div class="row">
      <div class="col-md-12 col-12 m-0 p-0 pt-4 pb-4">
        <div class="heading text-left ">
          <p>Details</p>
        </div>
        <div class="row col-12">
          <div class="col-md-5 text-left pl-0">
            <div class="detail-header ">
              <p>HISTORY</p>
            </div>
            <div class="history-content">
              <div class="row">
                <div class="col-md-1 col-1 mr-0 pr-0">
                  <p><i class='fas fa-cogs'></i></p>
                </div>
                <div class="col-md-11 col-11 mr-0 pr-0 ml-0">
                  <p style="font-weight:bold">Manufacturer's Warranty</p>
                  <p class="mt-0 pt-0">This vehicle still has 20 months left on its Chevrolet manufacturer's warranty.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-12 text-left mt-4 pl-0">
            <div class="detail-header">
              <p>BASICS</p>
            </div>
            <div class="history-content">
              <div class="row">
                <div class="col-md-12 col-12 mr-0 pr-0 ml-0">
                  <p><strong>Colour</strong> : Black</p>
                  <p><strong>Mileage</strong> : 45kmpl</p>
                  <p><strong>Fuel Capacity</strong> : 4l</p>
                  <p><strong>Kerb Weight</strong> : 123kg</p>
                  <p><strong>Displacement</strong> : 150cc</p>
                </div>
              </div>
            </div>
          </div>
        <div class="col-md-4 col-12 text-left mt-4 pl-0">
            <div class="detail-header">
              <p>PERFORMANCE</p>
            </div>
            <div class="history-content">
              <div class="row">
                <div class="col-md-12 col-12 mr-0 pr-0 ml-0">
                  <p><strong>Ignition</strong> : Twin Spark</p>
                  <p><strong>No of Gears</strong> : 4</p>
                  <p><strong>Max Power</strong> : 13.8 bhp @9000 rpm</p>
                  <p><strong>Max Torque</strong> : 13.4Nm @ 6000 rpm</p>
                  <p><strong>Fuel Delivery System</strong> : Fuel Injection</p>
                  <p><strong>Cooling System</strong> : Liquid Cooled</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="col-md-11 middle-align col-12 m-0 p-0 pt-4 pb-4">
      <div class="heading text-left">
        <p>Special Feature</p>
      </div>
      <div class="history-content text-left">
       <p> "Bajaj categorizes CT100 as the jackpot bike offering superior mileage and low maintenance.
              Bajaj CT100 is layered with a new decal design. The SNS (Spring in Spring Suspension) technology aids in 
              conquering the most challenging road conditions. It has a long padded seat delivering a high level of comfort
              and making the commute on rougher terrains easier. The powerful engine helps in extracting the maximum efficiency. "</p>
      </div>
    </div>
     </div>
  </div>


<div class="col-md-11 middle-align bikex-font">
  <div class="row col-12 col-md-12 mt-4 mb-4 paragraph-size">
    <div class="col-md-8 text-left">
      <div class="col-md-12 mt-4 mb-4 padding-none-mobil-view">

        <div class="container text-left p-0 m-0 mt-4 mobil-view">
          <h3 class="why-finance">Why Finance with BikeX ?</h3>
          <ul class="text-left m-0 p-0 decoration-none">
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Apply in minutes</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Seamless process</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Highly competitive rates</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Safe and secure</li>
          </ul>
        </div>


        <p>Calculate your Payment</p>

        <div class="row">
          <div class="col-md-6">
            <input type="range" min="10000" max="20000" v-model="downPayment" class="slider ml-0 pl-0" id="myRange">
            <p>Down Payment: {{downPayment}} <span id="demo"></span></p>
          </div>
          <div class="col-md-6">
            <input type="range" min="12" max="36" v-model="tenure" class="slider ml-0 pl-0" id="myRange">
            <p>Months: {{tenure}} <span id="demo"></span></p>
          </div>
        </div>

        <div class="row mb-0">
          <div class="col-md-6 text-left">
            <p>Interest Rate: {{interest}}%</p>
          </div>
        </div>

        <div class="container text-left p-0 m-0 mt-4 laptop-views">
          <h3 class="why-finance">Why Finance with BikeX ?</h3>
          <ul class="text-left m-0 p-0 decoration-none">
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Apply in minutes</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Seamless process</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Highly competitive rates</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Safe and secure</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-md-4 m-0 p-0 mt-4 mb-4">
                  <div class="card m-0 p-0 ml-4 m-0">
                      <div class="heading bikex-header col-md-12 m-0 p-0">
                        <p class="my-2 ml-1">FINANCE WITH BIKEX</p>
                      </div>
                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 mt-2 p-0 text-left">
                            <p class="pl-2">Vehicle Price</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 mt-2 p-0 text-right paragraph-size">
                          <p>Rs. {{price}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Shipping</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{shipping}}</p>
                        </div>
                      </div>
                          <hr>
                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Total Price</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{price + shipping}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Down Payment</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{downPayment}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Amount Financed</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{loanAmount}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Emi Estimated</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{monthlyPayable}}</p>
                        </div>
                      </div>
                      <div class="col-md-12 mb-3">
                        <button class="btn btn-block border highlight">APPLY NOW</button>
                      </div>
                  </div>
            </div>
  </div>

  <nav class="navbar-fix col-md-12 p-0 m-0 fixed-top" v-if="shownav">
     <div class="price-panel mr-0 pr-0 ml-0 col-12 mb-1" style="background-color:white">
     <div class="row col-12 col-md-10" style="margin:0 auto">
        <div class="col-md-3 col-12 description">
        <h1 class="margin">{{product[0].name}}</h1>
        <p class="label">The power of all</p>
        </div>
         <div class="col-md-5 col-12 price">
        <p class="margin">Rs. 35000</p>
        <p class="label"><span style="color:#ffb52f">Down Payment</span> starts at 3500/month</p>
        </div>
        <!-- <div class="col-md-3 col-12">
           <button class="buttons">BOOK NOW</button>
        </div> -->
         <div class="col-md-4 display-laptop">
           <button class="buttons">BOOK NOW</button>
        </div>
        
         
        <div class="fixed-bottom display-mobile mobile-panel">
            <div class="row">
              <div class="col-12 p-0 m-0">
               <button class="buttons">BOOK NOW</button>
            </div>
            
        
             <!-- <div class="col-2 text-left ml-0 pl-3 mt-3 pr-4" v-on:click="wishlist(product[0].id)">
                <i class='far fa-heart ml-3' style='font-size:30px;color: #ffb52f'></i>
            </div> -->
            </div>
        </div>
     </div>
  </div>
  </nav>


</div>


</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
   data(){
    return{
        uploaded:[],
        images: [],
          product: [{id:2, name: 'Honda 3G'}],
          displayBlock:false,
          currentSlide: 0,
          added:[],
          alreadyExist:false,
          isExpand:false,
          expandedImage:'',
           downPayment: 10000,
      tenure: 12,
      price:35000,
      shipping:400,
              shownav:false

        }
      },
  components:{
     Carousel,
      Slide,
  },
created(){
    window.addEventListener('scroll', this.handleScroll);
  this.$http.get('http://localhost:3000/api/uploads/'+ this.$route.params.id)
          .then(res=>{
           this.uploaded = res.body.data
           this.images = this.uploaded[0].images
           window.console.log(this.uploaded[0].images)
         })
},
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },

    mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
    },
   
  methods:{
     handleScroll () {
        this.shownav = window.scrollY > 380
      },
    handleSlideClick: function(url){
             this.isExpand = true;
             this.expandedImage = url;
    },
    closemobileModal: function(){
          this.isExpand = false;
    },
          openModal: function(id){
            this.displayBlock = true;
            window.console.log('working')
            this.currentSlide = id;
          },
           closeModal: function(){
            this.displayBlock = false;
          },
          plusSlides(){
              if(this.currentSlide < this.images.length - 1){
                this.currentSlide++
              }else{
                this.currentSlide = 0
              }
          },
            minusSlides(){
              if(this.currentSlide > 0){
                this.currentSlide--
              }
          },
        
      },
      computed:{
    toDisplay(){
        return this.images.slice(0, 3);
    },
     loanAmount: function() {
       return this.price - this.downPayment
        },
      interest:function(){
        if(this.tenure < 24){
          return 15
        }else if(this.tenure <= 36 ){
          return 15.7
        }else{
            return 1
        }
      },
      interestCalculated: function(){
          return this.interest / 100 * this.loanAmount
      },
      totaltobepaid:function(){
        return this.loanAmount + this.interestCalculated
      },
      monthlyPayable: function(){
        return (this.totaltobepaid / this.tenure).toFixed(2)
      },
      }
}
</script>
<style scoped>
.c{
  overflow-x: scroll;
      display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: inherit;
    cursor: pointer;
}
.image-container img{
height: 300px;
cursor: pointer;
}
.display-mobile{
  display: none;
}
.buttons{
  margin-top: 10px;
  width: 100%;
}
.icons{
  cursor: pointer;
}
.heading{
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
}
.detail-header{
  color: gray;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}
.navbar-fix{
    animation:slide-down 0.7s;
}
@keyframes slide-down {
    0% {
     
        transform: translateY(-100%);
    } 
    100% {
        
        transform: translateY(0);
    } 
}
.mobile-panel{
  background-color: #fafafa;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-top: 10px;
  padding-right: 30px;
  padding-right: 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px 0px;
}
.price .label{
  font-size: 13px;
}
.label{
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
}
.history-content{
    font-family: 'Montserrat', sans-serif;
}
.history-content p{
  margin-bottom: 2px;
  font-size: 15px;
  color: black
}
.features-content{
    font-family: 'Montserrat', sans-serif;
}
.price{
  /* margin-top: 2%; */
  text-align: right;
  margin-top: 1%
}
.margin{
   margin-bottom: 0px;
}
.description h1{
  font-size: 30px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}
.description{
  text-align: left;
  margin-top: 1%
}
@media only screen and (max-width: 600px) {
 .display-mobile{
  display: block;
}
.display-laptop{
  display: none;
}
.buttons{
  margin-top: 10px;
  width: 100%;
}
.price-panel{
    box-shadow: none !important;
}
.price{
  margin-top: 0%;
  text-align: center
}
.description{
  text-align: center !important
}
}

/* laptop responsive */
.row1 > .column {
  padding: 0 0px;
}
.price-panel{
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px 0px;
}

.preview{
 background-color: rgba(0, 0, 0, 0.5);
 margin-bottom: 20px;
}
.price p{
  font-size: 22px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
}
.buttons{
  padding: 10px 35px 10px 35px;
  background-color:  #ffb52f;
  color: black;
  border: none;
  box-shadow: none;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
}
.row1:after {
  content: "";
  display: table;
  clear: both;
}
.block{
  display: block !important
}
.column {
  display: inline;
  
}
.image-modal{
  margin-bottom: 20px;
  margin-top: 70px;
}
/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top:5px;
  left: 0;
  top: -38px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
::-webkit-scrollbar {
    display: none;
}
/* Modal Content */
.modal-content {
  position: relative;
   background-color: rgba(0, 0, 0, 0.7);
  -webkit-tap-highlight-color: transparent;
  margin: auto;
  padding: 0;
  width: 100%;
}

/* The Close Button */
.close {
  color: #ffb52f;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 45px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: white;
  text-decoration: none;
  cursor: pointer;
}

.cursor {
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 5px;
  padding-right: 0px !important;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color:  #ffb52f !important;
  font-size: 60px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.fas:hover {
 color: white !important;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  margin-bottom: 4px;
}
.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

/* mobiles */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modalmobile {
  display: none;/* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 99999999; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content-mobile {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* The Close Button */
.closemobile {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.closemobile:hover,
.closemobile:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content-mobile {
    width: 100%;
    padding-top: 30%;
  }
  .navbar-fix{
    display: none
  }
}

@media only screen and (max-width: 600px) {
   
      .mobil-view{
        display: block !important;
        margin-bottom: 10px !important
      }
      .laptop-views{
        display: none;
      }
      .padding-none-mobil-view{
         margin: 0 !important;
        padding: 0 !important
      }
      }
.mobil-view{
  display: none;
}
.highlight{
  border: 1px solid #ffb52f !important;
  color: #ffb52f;
  font-weight: 550;
}
.why-finance{
  font-size: 15px;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;

}
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider:hover {
  opacity: 1;
}
.decoration-none li{
  text-decoration: none;
  list-style-type: none;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffb52f;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #ffb52f;
  cursor: pointer;
}

.middle-align{
  margin: 0 auto;
}
.her{
  margin: 20px 0px 20px;
}
.bikex-font{
  font-family: 'Montserrat', sans-serif;
}
.bikex-header{
  background-color:#ffb52f;
  color: whitesmoke;
  font-size: 10px;
  font-weight: bold
}
.paragraph-size{
  font-size: 14px;
  font-weight: bold
}
</style>