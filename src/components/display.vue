<template>
<div class="product-display" style="margin:0 auto">
  <div class="display-mobile mt-4 col-12 p-0">
    <carousel :perPage="1" :loop="true" paginationActiveColor="#ffb52f">
      <slide v-for="(image, index) in images[0].images" @slideclick="handleSlideClick(image)" :key="index">
        <div class="image text-center mt-4">
          <img :src="image" width="100%">
        </div>
      </slide>
    </carousel>
  </div>
  <div class="loader display-mobile" v-if="image_loading">
    <p>Loading Images..</p>
  </div>
  <div id="myModalMobile" class="modalmobile" v-bind:class="{'block': isExpand}">
  <span class="closemobile" v-on:click="closemobileModal">&times;</span>
    <div class="image_holder">
      <v-zoomer style="width:100%; height: 600px; border: solid 1px silver;">
    <img class="modal-content-mobile" id="img01" :src="expandedImage">
    </v-zoomer>
    </div>
</div>
  <div class="display-laptop mt-0 pt-0 m-0 p-0">
    <div class="row m-0 p-0 c">
        <!-- <img :src="image" v-on:click="openModal(index);"> -->
        <div class="image-container" v-for="(image, index) in images[0].images" :key="index">
                   <img :src="image" v-on:click="openModal(index);">
        </div>
    </div>
     <div class="load" v-if="images.length == 0">
              <div class="loading text-center mb-4" style="min-height:250px">
                <div class="spinner-border" role="status" style="margin-top:10%">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
      </div>

    <div id="myModal" class="modal mt-4" v-bind:class="{ 'block': displayBlock }">
      <div class="modal-content">
        <div class="mySlides text-center">
          <span class="close cursor" v-on:click="closeModal">
            <img src="../assets/close.svg" width="30px">
          </span>
          <div class="numbertext">
            <p>{{currentSlide + 1}} / {{images[0].images.length}}</p>
          </div>
            <img :src="images[0].images[currentSlide]" style="width:auto" height="465px" class="image-modal">
        </div>
        <a class="prev" v-on:click="minusSlides()">
          <img src="../assets/back.svg" width="50px">
        </a>
        <a class="next" v-on:click="plusSlides()">
          <img src="../assets/next.svg" width="50px">
        </a>
        <div class="preview mb-4">
          <div class="row p-0 m-0">
            <div class="col-md-1 p-0 m-0" v-for="(image, index) in images[0].images" :key="index" >
              <img class="demo cursor" :src="image" style="width:auto" height="70px" v-on:click="openModal(index)" alt="Nature and sunrise">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <div class="price-panel ml-0 col-12 mb-1 m-0 p-0" style="background-color:white" >
     <div class="row col-12 col-md-10 p-0" style="margin:0 auto" v-for="(vehicles, index) in vehicles" :key="index">
       <div class="col-md-4 col-12 ml-0 p-0 ipad-col-5 description" v-bind:class="{'ipad-col-3':vehicles.status == 3}">
        <h1 class="margin">
          <span>{{vehicles.model_id.make}} </span> <span>{{vehicles.model_id.modal_name}}</span>
           <span class="badge ml-1" v-if="vehicles.status == 4">Sale Pending</span>
        </h1>
        <h1 class="margin" v-if="vehicles.length == 0" >Loading..</h1>
        <label>BX{{id}}</label>
        </div>
         <div class="col-md-3 ipad-col-3 col-12 pl-0 price" v-bind:class="{'ipad-col-3':vehicles.status == 3}">
        <p class="margin">{{vehicles.selling_price | currency}}</p>
        <p class="label">Questions? <a class="phone" href="tel: +91 9742744444">+91 9742744444</a></p>
       </div>
       <!-- <div class="col-md-6 col-12 price" v-if="loading">
        <p class="margin">Loading price..</p>
       </div> -->
        <!-- <div class="col-md-3 col-12">
           <button class="buttons">START PURCHASE</button>
        </div> -->
         <div class="col-md-2 ipad-col-3 px-1 mt-2 display-laptop" v-if="vehicles.status == 3">
           <button class="buttons" v-on:click="book" >RESERVE(₹1,000)</button>
        </div>
        <div class="col-md-3 ipad-col-3 px-1 mt-2 display-laptop" v-if="vehicles.status == 3">
              <button class="buttons" v-on:click="checkout">START PURCHASE</button>
        </div>
        <div v-else  class="col-md-5 ipad-col-4 mt-2 mr-0 p-0 display-laptop">
          <!-- <span class="badge badge-danger">Sale Pending</span> -->
           <button class="buttons" v-on:click="gotocommuter">FIND A MATCH</button>
        </div>
        
         
        <div class="fixed-bottom display-mobile mobile-panel">
            <div class="row m-0 p-0">
              <div class="col-7 p-0 m-0"  v-if="vehicles.status == 3">
              <button class="buttons mr-1 m-0" v-on:click="checkout">START PURCHASE</button>
              </div>
              <div class="col-4 p-0 m-0"  v-if="vehicles.status == 3">
                <button class="buttons ml-3 m-0" v-on:click="book" >RESERVE(₹1,000)</button>
              </div>
              <div v-else class="text-center col-12 mr-4">
                <!-- <span class="badge badge-danger mr-2">Sale Pending</span> -->
                <button class="mybtn p-2" v-on:click="gotocommuter">Look for other vehicle</button>
              </div>
            </div>
        </div>
     </div>
  </div>

<div class="col-md-10 margin text-center bg">
 <strong class="pfont"><p>This price is inclusive of vehicle price, refurbishment cost, registration cost & transfer charges.</p></strong>
  </div>


  <div class="col-md-10 p-0 middle-align col-12 specification pt-4">
    <div class="row col-12">
      <div class="col-md-12 col-12 m-0 p-0 pb-4">
        <!-- <div class="heading text-left ">
          <p>Details</p>
        </div> -->
        <div class="row col-12 no-space">
          <div class="col-md-6 text-left pl-0 mt-2">
            <div class="detail-header ">
              <p>ABOUT THE VEHICLE</p>
            </div>
            <div class="history-content">
              <div class="row">
                <div class="col-md-12 col-12 mr-0 pr-5 ml-0 no-padding" v-for="(vehicles, index) in vehicles" :key="index">
                  <!-- <p style="font-weight:bold">Manufacturer's Warranty</p> -->
                  <p class="mt-0 pt-0" style="text-align:justify">
                    {{vehicles.model_id.comments}}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3 col-12 text-left mt-2 pl-0">
            <div class="detail-header">
              <p>BASICS</p>
            </div>
            <div class="history-content">
              <div class="row">
                <div class="col-md-12 col-12 mr-0 pr-0 ml-0" v-for="(vehicles, index) in vehicles" :key="index">
                  <p><strong>Color</strong>: {{vehicles.color}}</p>
                  <p><strong>Mileage</strong>: {{vehicles.model_id.mileage}} kmpl</p>
                  <p><strong>Fuel Capacity</strong>: {{vehicles.model_id.tank_capacity}} L</p>
                  <p><strong>Kerb Weight</strong>: {{vehicles.model_id.tank_capacity}}kg</p>
                  <p><strong>Displacement</strong>: {{vehicles.model_id.engine_cc}}</p>
                </div>
              </div>
            </div>
             <!-- <div class="loader-sm card mt-3 mr-4" v-if="loading"></div>
             <div class="loader-sm card mt-3 mr-3" v-if="loading"></div>
             <div class="loader-sm card mt-3 mr-2" v-if="loading"></div>
             <div class="loader-sm card mt-3" v-if="loading"></div> -->
          </div>
            <div class="col-md-3 col-12 text-left mt-2 pl-0">
                <div class="detail-header">
                  <p>PERFORMANCE</p>
                </div>
                <div class="history-content">
                  <div class="row">
                    <div class="col-md-12 col-12 mr-0 pr-0 ml-0" v-for="(vehicles, index) in vehicles" :key="index">
                      <p><strong>Engine CC</strong>: {{vehicles.model_id.engine_cc}}</p>
                      <p><strong>No of Gears</strong>: {{vehicles.model_id.number_of_gears}}</p>
                      <p><strong>Wheel Type</strong>: {{vehicles.model_id.wheel_type}}</p>
                      <p><strong>Tyre Type</strong>: {{vehicles.model_id.tyre_type}}</p>
                      <p><strong>Fuel Delivery System</strong>: {{vehicles.model_id.fuel_system}}</p>
                      <p><strong>Cooling System</strong>: {{vehicles.model_id.cooling_system}}</p>
                    </div>
                  </div>
                </div>
              <!-- <div class="loader-sm card mt-3 mr-4" v-if="loading"></div>
             <div class="loader-sm card mt-3 mr-3" v-if="loading"></div>
             <div class="loader-sm card mt-3 mr-2" v-if="loading"></div>
             <div class="loader-sm card mt-3" v-if="loading"></div> -->
              </div>

        </div>

        <!-- <div class="container text-center" style="min-height:200px" v-if="loading">
          <p class="mt-5"> Loading Model description for you..</p>
        </div> -->
      </div>
      <!-- <div class="col-md-11 middle-align col-12 m-0 p-0 pt-4 pb-4">
      <div class="heading text-left">
        <p>Special Feature</p>
      </div>
      <div class="history-content text-left" v-for="(vehicles, index) in vehicles" :key="index">
       <p>{{vehicles.model_id.comments}}</p>
      </div>
    </div> -->
     </div>
  </div>
<div class="col-md-11 p-0 middle-align bikex-font">
  <nav class="navbar-fix col-md-12 p-0 m-0 fixed-top" v-if="shownav">
    <div class="price-panel ml-0 col-12 mb-1 p-0" style="background-color:white" >
     <div class="row col-12 col-md-10 p-0" style="margin:0 auto" v-for="(vehicles, index) in vehicles" :key="index">
       <div class="col-md-4 col-12 ml-0 p-0 ipad-col-5 description" v-bind:class="{'ipad-col-3':vehicles.status == 3}">
        <h1 class="margin">
          <span>{{vehicles.model_id.make}} </span> <span>{{vehicles.model_id.modal_name}}</span>
           <span class="badge ml-1" v-if="vehicles.status == 4">Sale Pending</span>
        </h1>
        <h1 class="margin" v-if="vehicles.model_id.length == 0" >Loading..</h1>
        <label>BX{{id}}</label>
        </div>
         <div class="col-md-3 ipad-col-3 col-12 pl-0 price" v-bind:class="{'ipad-col-3':vehicles.status == 3}">
        <p class="margin">{{vehicles.selling_price | currency}}</p>
        <p class="label">Questions? <a class="phone" href="tel: +91 9742744444">+91 9742744444</a></p>
       </div>
       <div class="col-md-6 col-12 price" v-if="loading">
        <p class="margin">Loading price..</p>
       </div>
        <!-- <div class="col-md-3 col-12">
           <button class="buttons">START PURCHASE</button>
        </div> -->
         <div class="col-md-2 ipad-col-3 px-1 mt-2 display-laptop" v-if="vehicles.status == 3">
           <button class="buttons" v-on:click="book" >RESERVE(₹1,000)</button>
        </div>
        <div class="col-md-3 ipad-col-3 px-1 mt-2 display-laptop" v-if="vehicles.status == 3">
              <button class="buttons" v-on:click="checkout">START PURCHASE</button>
        </div>
        <div v-else  class="col-md-5 ipad-col-4 mt-2 mr-0 p-0 display-laptop">
          <!-- <span class="badge badge-danger">Sale Pending</span> -->
           <button class="buttons" v-on:click="gotocommuter">FIND A MATCH</button>
        </div>
        
        <div class="fixed-bottom display-mobile mobile-panel">
            <div class="row m-0 p-0">
              <div class="col-7 p-0 m-0"  v-if="vehicles.status == 3">
              <button class="buttons mr-1 m-0" v-on:click="checkout">START PURCHASE</button>
              </div>
              <div class="col-4 p-0 m-0"  v-if="vehicles.status == 3">
                <button class="buttons ml-3 m-0" v-on:click="book" >RESERVE(₹1,000)</button>
              </div>
              <div v-else class="text-center col-12 mr-4">
                <!-- <span class="badge badge-danger mr-2">Sale Pending</span> -->
                <button class="mybtn p-2" v-on:click="gotocommuter">Look for other vehicle</button>
              </div>
            </div>
        </div>
     </div>
  </div>
  </nav>
 <!-- <div id="overlay" class="loading text-center mb-4" style="min-height:200px" v-if="loading">
            <div id="text" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div> -->
       <div class="col-md-11 middle-align similar pl-0">
        <h5 class="mb-3">Similar Vehicles:</h5 >
  <div class="row c mb-4  m-0 p-0"> 
     <div class="card-container  text-center ml-2 border" v-for="(similar, index) in megaData" :key="index">
            <div v-on:click="display_this(similar.vehicle_id)">
            <img class="image" :src="similar.path" width="80%" alt="">
            
             <div class="card-body text-left mt-1">
               <h5 class="" style="font-weight:500">{{similar.model_id.modal_name}}</h5>
                                     <!-- <span>{{image.engine_cc}} </span>CC -->
                 <div class="d-flex justify-content-between">
                     <p class="bold bike-sp">{{similar.selling_price | currency}}</p>
                      <img class="premium" v-if="similar.type == 'premium'" src="../assets/premium.svg" width="10%">
                 </div>
             </div>
            </div>
      </div> 
</div>
</div>
</div>
</div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
   data(){
    return{
      // id:'',
      uploaded:[],
      // images: [],
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
      // loading:true,
      shipping:400,
      shownav:false,
      models:[],
      similar:[],
      similar_model:[],
      // displayImage:[]
        }
      },
  components:{
     Carousel,
      Slide,
  },
created(){
  window.scrollTo({
                top: 0,
                left: 0,
            })
            // this.id = 
  // this.loading = true
  // window.addEventListener('scroll', this.handleScroll);
  // this.id = this.$route.params.id


            //  this.images = this.uploaded[0].images


    // this.$http.get('https://backend-bikex.herokuapp.com/api/uploads/'+ this.id)
    //       .then(res=>{
    //        this.uploaded = res.body.data
    //        this.images = this.uploaded[0].images
    //        this.loading = false
    //        window.console.log(this.images)
    //      })   
        },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },

    mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
            })
// window.console.log(this.id);
    },
   
  methods:{
    // scroll(){
    //      window.console.log(this.$refs.demo);
    //      var x = this.$refs.demo
    //      x.scrollTo(500, 0)
    // },
       startpurchase(){
              window.scrollTo({
                top: 800,
                left: 0,
                behavior: 'smooth'
            })
              // this.$router.push('/checkout/' + this.id)  
        },
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
            // window.console.log('working')
            this.currentSlide = id;
          },
           closeModal: function(){
            this.displayBlock = false;
          },
          plusSlides(){
              if(this.currentSlide < this.images[0].images.length - 1){
                this.currentSlide++
              }else{
                this.currentSlide = 0
              }
          },
            minusSlides(){
              if(this.currentSlide > 0){
                this.currentSlide--
              }else{
                this.currentSlide = this.images[0].images.length - 1
              }
          },
          checkout(){
            this.$router.push('/checkout/' + this.id)
          },
           book(){
            this.$router.push('/booking/' + this.id)
          },
          gotocommuter(){
        this.$router.push('/scooter')
          },
        display_this(v_no){
          window.scrollTo({
                top: 0,
                left: 0,
            })
            this.$router.push('/vehicle/'+ v_no)
             window.location.reload()
        }
        
      },
      computed:{
        image_loading(){
          return this.$store.state.image_loading
        },
        id(){
          return Number(this.$route.params.id)
        },
        loading(){
        return  this.$store.state.loading
        },
         vehicles () {
          return this.$store.getters.vehicle(this.id)
        },
      images () { 
         return this.$store.getters.images_array(this.id)
        // return []
      },
    //  loanAmount: function() {
    //    return this.price - this.downPayment
    //     },
    //   interest:function(){
    //     if(this.tenure < 24){
    //       return 15
    //     }else if(this.tenure <= 36 ){
    //       return 15.7
    //     }else{
    //         return 1
    //     }
    //   },
    //   interestCalculated: function(){
    //       return this.interest / 100 * this.loanAmount
    //   },
    //   totaltobepaid:function(){
    //     return this.loanAmount + this.interestCalculated
    //   },
    //   monthlyPayable: function(){
    //     return (this.totaltobepaid / this.tenure).toFixed(2)
    //   },

    datas(){
        return this.$store.getters.similar_vehicle('Hero', 10012)
    },
    displayImage(){
                 return  this.$store.state.display_images   
    },
    megaData(){
        const temp2 = []
        this.datas.forEach(x => {
            this.displayImage.forEach(y => {
            if (x.vehicle_id === y.vehicle_id) {
                temp2.push({ ...x, ...y })
            }
            })
        })
      return temp2
    }

      }
}
</script>
<style scoped>
.bold{
    font-weight: 500
}

.card-body{
    padding: 6px;
    cursor: pointer;
}
.card-body p{
    margin: 2px 0px;
    font-size: 15px;
    margin-top: 0px;
    padding:0px;
    cursor: pointer;
}
.bike-name{
    text-transform: uppercase;
    color:#001232;
    font-size:17px !important;
}
 .card-body .bike-name{
        font-size: 10px !important
    }
.card-container{
background-color: #fff !important;
    background-clip: border-box !important;
    border: 1px solid rgba(0,0,0,.125) !important;
    border-radius: .25rem !important;
    cursor: pointer;
}

.card-container .image{
  width: 250px;
  cursor: pointer;
}
.class{
  width: 100%;
  overflow-x: scroll
}
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
.badge{
  background-color: #ffb52f;
  border-radius: 0px !important;
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
}
.detail-header{
  color: gray;
  font-weight: bold;
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
  padding-left: 13px;
  padding-top: 10px;
  padding-right: 0px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 4px 0px;
}
.price .label{
  font-size: 13px;
}
.label{
  font-size: 13px;
}
.history-content{
  }
.history-content p{
  margin-bottom: 2px;
  font-size: 15px;
  color: black
}
.features-content{
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
  font-size: 20px;
  font-weight: bold;
}
.description{
  text-align: left;
  margin-top: 1%
}
@media only screen 
  and (min-device-width: 600px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1){
    .ipad-col-4{
      flex: 0 0 33.333333%;
    max-width: 33.333333%;
    }
    .description h1{
  font-size: 15px !important;
  font-weight: bold;
}
    .badge{
      font-size: 45% !important
    }
    .ipad-col-3{
      flex: 0 0 25% !important;
    max-width: 25% !important;
    }
     .ipad-col-5{
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
    }
    .buttons{
    padding: 10px 15px 10px 15px !important;
    }
    .price .label{
    font-size: 10px !important;
    }
    .no-ipad-margin{
      margin: 0!important;
      padding: 0 !important
    }
    .buttons{
    font-size: 8px !important;
    font-weight: 700;
    height: inherit;
    letter-spacing: 1px !important;
}
  }

  @media only screen 
  and (min-device-width: 600px) 
  and (max-device-width: 767px) 
  and (-webkit-min-device-pixel-ratio: 1){
    .ipad-col-4{
      flex: 0 0 33.333333%;
    max-width: 33.333333%;
    }
    .description h1{
  font-size: 15px !important;
  font-weight: bold;
  }
  .price-panel{
    padding: 10px !important
  }
  .specification{
        padding: 10px !important

  }
  .similar h5{
    padding: 10px !important
  }
    .badge{
      font-size: 45% !important
    }
    .ipad-col-3{
      flex: 0 0 25% !important;
    max-width: 25% !important;
    }
     .ipad-col-5{
    flex: 0 0 41.666667%;
    max-width: 41.666667%;
    }
    .buttons{
    padding: 10px 15px 10px 15px !important;
    }
    .price .label{
    font-size: 10px !important;
    }
    .no-ipad-margin{
      margin: 0!important;
      padding: 0 !important
    }
    .no-padding{
      padding-right: 0 !important
    }
    .buttons{
    font-size: 8px !important;
    font-weight: 700;
    height: inherit;
    letter-spacing: 1px !important;
}
  }

@media only screen and (max-width: 600px) {
 .display-mobile{
  display: block;
}
 .no-padding{
      padding-right: 0 !important
    }
.no-space{
  margin: 0 !important;
padding: 0 !important;
}
.specification{
        padding: 10px !important

  }
  .similar h5{
    padding: 10px !important
  }
  .badge{
    font-size: 50% !important
  }
.buttons{
    font-size: 10px !important;
    font-weight: 700;
    height: inherit;
    letter-spacing: 0px !important;
}
.margin{
  margin-top: 30px
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
  font-size: 17px;
  font-weight: bold;
}
.buttons{
  padding: 10px 35px 10px 35px;
  background-color:#ffb52f;
    box-shadow: none;
    font-size: 11px;
    font-weight: 700;
    height: inherit;
    letter-spacing: 1.2px;
    color: #001232;
    padding: 10px 22px;
    outline: none;
    text-transform: uppercase;
    border:none;
}
.buttons:hover{
  opacity: 0.9;
}
.mybtn{
 font-size: 11px;
  font-weight: 400;
  height: inherit;
  letter-spacing: 1px;
  text-transform: uppercase;
  background-color:  #ffb52f;
  border: 1px solid transparent;
  color: #fff;
  box-shadow: none; 
  width:100%
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
.bg{
  background-color:#e6e6e6; 
  letter-spacing: 1.5px;
  border-bottom: 3px solid #ffb52f;
  padding-top:5px;
  padding-bottom:0px !important;
}
.margin{
  margin:0 auto;
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
.phone{
  color:#ffb52f
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
@media only screen and (max-width: 600px){
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
.loader{
  animation: blink 1s linear infinite;
  min-height:200px;
}
.loader-sm{
  animation: blink 1s linear infinite;
  min-height:20px;
  border: none;
  border-radius: 0px
}
@keyframes blink {
  0%{
    background-color: gray;
    opacity: 0.5
  }
  50%{
    background-color: gray;
    opacity: 0.3
  }
  100%{
    background-color: gray;
    opacity: 0.7
  }
}
</style>