<template>
  <div class="finance bg">
<div class="middle col-md-10">
      <div class="row col-md-12 bg m-0 p-0">
      <div class="col-md-6 makemedown m-0 p-0">
         <h4>We buy motorcycles.</h4>
            <h3><strong>We pay a heapful of green<span style="color:#ffb52f"> notes.</span></strong></h3>
            <p class="sell-content">-we make it quick and hassle-free. We are here to ensure that you avoid those mind-numbing pitfalls that quite a few sellers get pulled into. We are always looking for used motorcycles and will buy any make or model. Fill up this form and sell away!
            </p>
            <p class="mt-5 mk"><strong>Instant Valuation. Highest trade prices.</strong></p>
          <div class="button text-left mb-4 mt-4">
            <button class="viewbikes-button" data-toggle="modal" data-target="#exampleModalCenter" ><strong>SELL YOUR MOTORBIKE</strong></button> 
            <!-- Button trigger modal -->
        

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <div class="back mt-4 ml-3 pt-4">
          <h2 class="modal-title m-0 p-0" id="exampleModalLongTitle">SELL</h2>
        </div>
        <!-- <h5 class="modal-title" >FILL</h5> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <img src="../assets/close-button.svg" width="22px">
        </button>
        
      </div>
      <div class="modal-body">
        <p class="text-center"  style="color:red" v-if="message">{{message}}</p>
        
         <div class="form row">
              <div class="col-md-4 mb-4">
                  <input list="hosting-plan4" type="text" class="form-control" v-model="make" required>
                   
                       
                <span class="floating-label">Make</span>
              </div>
              <div class="col-md-4 mb-4">
                <input list="hosting-plan5" type="text" class="form-control" v-model="model" required>
               
               <span class="floating-label">Model</span>
              </div>
                  <div class="col-md-4 mb-4">
                    <input list="hosting-plan6" type="text" class="form-control" v-model="engine_cc" required>
                      <span class="floating-label">Engine CC</span>
                  </div>
            </div>
            <div class="row form">
              <div class="col-md-4 mb-4">
                <input list="hosting-plan10" type="text" class="form-control" v-model="make_year" required>
                <span class="floating-label">Make Year</span>
              </div>
              <div class="col-md-4 mb-4">
                 <input list="hosting-plan11" type="text" class="form-control" v-model="km_run" required>
                   
                <span class="floating-label">KM Run</span>
              </div>
              <div class="col-md-4 mb-4">
                 <input list="hosting-plan11" type="text" class="form-control" v-model="vehicle_no" required>
                <span class="floating-label">Vehicle No</span>
              </div>   
            </div>
     <hr>       
           

            <div class="row form">
              <div class="col-md-6 mb-4">
                <input list="hosting-plan10" type="text" class="form-control" v-model="name" required>
                <span class="floating-label">Name</span>
              </div>
              <div class="col-md-6 mb-4">
                 <input list="hosting-plan11" type="number" class="form-control" v-model="mobile" required>
                <span class="floating-label">Mobile No </span>
              </div>
            </div>
            <div class="row form">
              <div class="col-md-6 mb-4">               
                <input list="hosting-plan2" type="text" class="form-control" v-model="city" required>
                  <datalist id="hosting-plan2">
                    <option value="Bengaluru"></option>
                     <option value="Hyderabad"></option> 
                     <option value="Chennai"></option>
                     <option value="Kochi"></option>
                     <option value="Thiruvanthapuram"></option>  
                     
                  </datalist>
                  <span class="floating-label">Select City</span>
               </div>
              <div class="col-md-6 mb-4">
                <input list="hosting-plan2" type="text" class="form-control" v-model="State" required>
                  <datalist id="hosting-plan2">
                    <option value="Karnataka"></option>   
                     <option value="Andhra Pradesh"></option> 
                      <option value="Tamilnadu"></option>  
                       <option value="Kerala"></option> 
                        <option value="Goa"></option> 
                  </datalist>
                  <span class="floating-label">Select State</span>
              </div>
             
            </div>
      </div>
   
      <div class="modal-footer ">
       
        <button type="button" class="viewbikes-button" v-on:click="apply"><strong>
           <span>SUBMIT</span>
            <div v-if="loading" class="spinner-border spinner-border-sm"></div>
          </strong></button>
      </div>
    </div>
  </div>
</div>
          </div>
      </div>
      <div class="col-md-6 mt-0">
         <img src="../assets/sellimage.jpg" alt="src" width="100%">
      </div>
    </div>
</div>

        <div class="container middle col-md-10 ">
          <div class="row bg-light col-12 mt-5 p-5 m-0 p-0">
            <div class="col-md-4 col-12 margin-bottom m-0 p-0 ipad-12 ">  
                <div class="row col-12 m-0 p-0">
                            <div class="col-md-12 col-12 m-0 p-0 text-left mt-1">
                              <div class="row m-0 p-0">
                                <div>
                                  <img class="imgsize" src="../assets/clock.svg" width="25px"> 
                                </div>
                              <div class="col-md-10 m-0 p-0 pl-3 col-10">
                                <h6 class="card-title pb-2 mb-0"><strong>Quick & Hassle-Free</strong></h6>
                               <p class="card-text m-0 p-0">All we need is the basic information to start the selling process</p>
                              </div>
                            </div>  
                            </div>
                  </div>
            </div>

              <div class="col-md-4 col-12 margin-bottom m-0 p-0 ipad-12">
              
               <div class="row m-0 p-0">
                         <div class="">
                                  <img class="imgsize" src="../assets/saveb.svg" width="25px"> 
                          </div>
                            <div class="col-md-10 m-0 p-0 pl-3 col-10">
                              <h6 class="card-title pb-2 mb-0"><strong>Valuation is fair & square</strong></h6>
                              <p class="card-text m-0 p-0">We offer the ‘right’ and the highest trade prices. You will walk away with a good chunk of cash.</p>
                            </div>  
                        </div>
                      </div> 
            
          
            
            <div class="col-md-4 col-12 margin-bottom m-0 p-0 ipad-12">
              
               <div class="row m-0 p-0">
                         <div class="">
                                  <img class="imgsize" src="../assets/pickup-truck.svg" width="25px"> 
                          </div>
                            <div class="col-md-10 m-0 p-0 pl-3 col-10">
                              <h6 class="card-title pb-2 mb-0"><strong>Doorstep Pick-up</strong></h6>
                              <p class="card-text m-0 p-0">We will schedule a time to pick up the bike...</p>
                            </div>  
                        </div>
                      </div>
                    </div>
                  </div>

  <!-- icons grid -->
     
  <!-- image section -->
      <div class="col-md-10 margin">
             <div class="col-md-12 ml-0 pl-0 text-left m-0 p-0">
                <h3 class="ml-0 pl-0 pb-3 mt-5"><strong>how it works?</strong></h3>
             </div>
              
                   <div class="row m-0 p-0 pb-3 col-12 col-md-12 mt-2">
                      <div class="mr-2 p-0">
                         <img class="imgsize" src="../assets/sell_1form.svg" width="25px">    
                      </div> 
                      <div class="col-md-10 col-11 m-0 p-0">
                        <p class="m-0 p-0 cool">It all begins with a form</p>
                        <p class="mb-0 p-0 ptag">We need a few details about you and the bike you are selling.. It’s more like a laundry list so just tap away!</p>
                      </div>
                    </div>  

                    <div class="row m-0 p-0 pb-3 col-12 mt-1">
                      <div class="mr-2 p-0">
                        <img class="imgsize" src="../assets/sell_2investigate.svg" width="25px">
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">Investigation leads to an endgame </p>
                        <p class="m-0 p-0 ptag">We will book an appointment for a bike check. Someone from our team will come to your registered address at the confirmed slot to do a thorough check. Once we know the condition of the bike and take in all the information you have for us, we will be able to put a realistic price on it. This check will also include a test ride.</p>
                      </div>
                    </div>  

                    <div class="row m-0 p-0 pb-3 col-12">
                      <div class="mr-2 p-0">
                      <img class="imgsize" src="../assets/sell_3haggling.svg" width="25px">
                      
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">Haggling is an art!</p>
                        <p class="m-0 p-0 ptag">We don’t negotiate much but we do stick to our guns. Our haggling sense is good and we always make it worth it. We are fair and make sure we shell out what it’s worth. </p>
                      </div>
                    </div>   

                    <div class="row m-0 p-0 pb-3 col-12">
                      <div class="mr-2 p-0">
                      <img class="imgsize" src="../assets/sell_4done.svg" width="25px">
                      
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">When all is said and done</p>
                        <p class="m-0 p-0 ptag">Once we come to a decision on the price, we will get the paperwork done. The payment will be made online via a direct money transfer. The bike is now ours! </p>
                      </div>
                    </div>   

                     <div class="row m-0 p-0 pb-3 col-12">
                      <div class="mr-2 p-0">
                      <img class="imgsize" src="../assets/sell_5reciept.svg" width="25px">
                      
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">We end it on a good note, in this case, with a receipt</p>
                        <p class="m-0 p-0 ptag">We will need both parties to sign a certificate that incorporates the details of the bike, details of the seller/buyer and the amount paid. Sign with a date and most importantly we will be writing the very famous 'sold as seen' on the bottom. </p>
                      </div>
                    </div>   
               
          </div>  

   <hr>
    <div class="col-md-12 middle col-12">
     
      <div class="col-md-12 text-center">
        <p class="font hit">questions ?</p>
      </div>

      <div class="container col-md-10 col-12 middle">
         <div class="row col-md-12 col-12 mb-4">
             <div class="col-md-6 col-12  text-center border-right no-border">
                 <p class=""><i style="color:#ffb52f" class="fa fa-lg fa-phone pr-2 pt-1"></i><a class="phone" href="tel: +91 9742744444"><strong>+91 9742744444</strong></a></p>           
            </div>
             <div class="col-md-6 col-12 text-center">   
                  <p class=""><i style="color:#ffb52f" class="fa fa-envelope pr-2 pt-1"></i><a class="phone" href="mailto:info@bikex.in"><strong>Email us</strong></a></p>
            </div>
         </div>
      </div>
    </div>
</div>
       

</template>
<script>
export default {
  data(){
    return{
      bike_name: '',
        make: '',
        model:  '',
        engine_cc:  '',
        make_year:  '',
        km_run:  '',
        vehicle_no:  '',
        name:  '',
        mobile: '',
        city:  '',
        state:  '',
        loading:false,
        response:'',
        message:'',
    }
  },
  methods:{
    apply(){
      this.loading = true
      this.$http.post('https://backend-bikex.herokuapp.com/api/sell',{
               bike_name: this.bike_name,
                make: this.make,
                model:  this.model,
                engine_cc:  this.engine_cc,
                make_year:  this.make_year,
                km_run:  this.km_run,
                vehicle_no:  this.vehicle_no,
                name:  this.name,
                mobile: this.mobile,
                city:  this.city,
                state:  this.state,
            }).
            then(response=>{
            this.response = response.body;
            this.loading = false
            this.$swal({
              title:'Thank You!',
              text:'We will get in touch with you shortly'
              })
            }).catch(error => { 
                this.message = error.body.msg;
                this.loading= false
            })   
    }
  },
    mounted () {
       window.scrollTo({
                top: 0,
                left: 0,
            })
  },
  beforeDestroy () {
  },
  computed:{
     
  }
}
</script>


<style scoped>
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1){
    .ipad-12{
    flex: 0 0 100% !important;
    max-width: 100% !important;
    }
    .margin-bottom{
      margin-bottom: 20px !important;
    }
  }
.modal-header{
  min-height: 100px;
  background-color: rgb(0, 18, 51);
  background-image: url("../assets/heroes.png");
  background-size: cover;
  overflow: hidden

}
 .modal-title{
    color: #fefefe;
    font-size: 30px;
    font-weight: 700
  }

input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}

textarea:focus ~ .floating-label,
textarea:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}
select:focus ~ .floating-label,
select:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 5px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}

.inputText {
outline: none !important;
}
input:focus, textarea:focus, select:focus{
  outline: none !important;
  box-shadow: none !important
}
.floating-label {
  position: absolute;
  pointer-events: none;
  left: 30px;
  top: 8px;
  transition: 0.2s ease all;
}
.modals-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 75%;
}

.map-responsive{
  text-decoration: none;
  color:black;
  font-weight: 500;
}
.phone{
  text-decoration: none;
  color:black;
  font-weight: 500;
}
.makemedown{
  margin-top: 50px !important;
}
.input-group-text{
  color:#ffb52f;
}
.color{
  color:#ffb53f;
}
.background{
  background-color:#ffb52f;
}
.viewbikes-button{
    text-transform: uppercase;
    opacity: 0.9;
    background-color:	 #ffb52f;
    box-shadow: none;
    color: BLACK;
    padding: 8px 10px;
    outline: none;
    border:none;
    font-size:14px;
}
.viewbikes-button:hover{
  opacity: 1;
    background-color:	 #ffb52f;
    border-color: #ffb52f;
}
.margin{
    margin:0 auto;
}
.bg-light {
    background-color: whitesmoke!important;
}
.sell-top{
  background-color: rgba(231, 227, 161, 0.1);
  background-image: url('../assets/back.png'); 
}
@media only screen and (max-width: 600px) {
         .imgsize{
           width:15px !important;
         }
       
         .makemedown{
           margin:0;
           padding: 0;
         }
          .mk{
            margin-top:0 !important;
           padding: 0; 
          }   
          .container .row{
          margin:0;
          padding:0
          }
          .no-border{
            border: none !important
          }
          .keep-text-center{
            text-align: center !important
          }
          .no-margin{
            padding:0
          }
          .fa{
            margin-left:0px !important;
            font-size: 16px;
          }
          .ptag{
            font-size:10px;
           
          }
          .size p{
            font-size:10px;
            padding-top:4px;
                    font-weight: bold;
          }
          .middle{
          margin:0 auto;
          }
          .text-center{
            margin:0;
            padding:0
          }
          .margin-bottom{
            margin-bottom: 15px !important;
          }
      }


.hit{
font-weight: bold;
font-size:30px;
margin-left: 5px;
}
.py-1{
  font-size: 14px;
  font-weight: 400;

}
.ptag{
  font-size:16px;

}
.middle{
  margin: 0 auto;
}
.features-icons {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.features-icons .features-icons-item {
  max-width: 20rem;
}

.features-icons .features-icons-item .features-icons-icon {
  height: 7rem;
}

.features-icons .features-icons-item .features-icons-icon i {
  font-size: 4.5rem;
}

.features-icons .features-icons-item:hover .features-icons-icon i {
  font-size: 5rem;
}
 .text{
   text-align: left;
   font-size: 14px;
 }
    .text1{
   text-align: left;
 }
.sell-content{
  text-align: justify;
  font-weight: 400;
  letter-spacing: 0.4px
}
img {
    vertical-align: middle;
      border-style: none;
}
.li{
  list-style: none;
}
ul{
  list-style: none;
}
.card-text{
  font-size: 15px;
  font-weight:400;
}
.cool{
  font-weight: bold
}

.hey{
  background: linear-gradient(-85deg, rgb(255, 255, 255) 37%, rgb(245, 245, 245) 37%);
    background-image: linear-gradient(-85deg, rgb(255, 255, 255) 37%, rgb(245, 245, 245) 37%);
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
  
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
}

.jumbotron{
  background-image: url('../assets/sellimage.jpg') ;
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 50%;
  
}
.input-group>.form-control:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: none;
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
</style>