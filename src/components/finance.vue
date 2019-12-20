<template>
  <div class="finance p-0 m-0">
        <!-- icons grid -->
        <div class="container middle col-md-10 col-12 p-0 pt-4">
          <div class="row col-12 m-0 p-0 mt-4 mb-4 sell-top">
            <div class="col-md-4 ipad-12 col-12 margin-bottom">  
                <div class="row col-12">
                            <div class="col-md-1 col-1 m-0 p-0">
                             <img src="../assets/highly_competetive_rates.svg" width="15px">  
                            </div>
                            <div class="col-md-11 col-11 m-0 p-0 text-left ">
                              <p class="cool pb-2 mb-0">Best Price</p>
                              <p class="card-text">We help you get the lowest rate from multiple lenders. You can take the loan decision in only a few minutes.</p>
                            </div>  
                  </div>
            </div>
            <div class="col-md-4 ipad-12 col-12 margin-bottom">              
                <div class="row col-12">
                            <div class="col-md-1 col-1 m-0 p-0">
                             <img src="../assets/apply_in_minutes.svg" width="15px">  
                            </div>
                            <div class="col-md-11 col-11 m-0 p-0 text-left ">
                               <p class="cool pb-2 mb-0">Quick and Convenient</p>
                              <p class="card-text">Smart financing options, Easy application, Quick approvals, Hassle-free disbursement </p>
                            </div>  
                        </div>
                
             </div>
            
            <div class="col-md-4 ipad-12 col-12 margin-bottom">
              
               <div class="row col-12">
                            <div class="col-md-1 col-1 m-0 p-0">
                              <img src="../assets/easy_registrations.svg" width="15px">    
                            </div>
                            <div class="col-md-11 col-11 m-0 p-0 text-left ">
                              <p class="cool pb-2 mb-0">Multiple Financing Options</p>
                              <p class="card-text">We work with a few trusted banks and lending partners like IDFC First Bank, ZestMoney, MoneyTap, Hero FinCorp and LendBox.</p>
                            </div>  
                        </div>
                      </div>
                    </div>
                  </div>
  <!-- icons grid -->

 <div class="button text-center mb-4 mt-4">
            <button class="viewbikes-button" data-toggle="modal" data-target="#exampleModalCenter" ><strong>Apply For Finance</strong></button> 
            <!-- Button trigger modal -->
        

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <div class="back mt-4 ml-3 pt-4">
          <h2 class="modal-title m-0 p-0" id="exampleModalLongTitle">Loan Application</h2>
        </div>
        <!-- <h5 class="modal-title" >FILL</h5> -->
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
         <img src="../assets/close-button.svg" width="22px">
        </button>
        
      </div>
      <div class="modal-body">
        <p class="text-center"  style="color:red" v-if="message">{{message}}</p>
        
          <div class="form row">
              <div class="col-md-6 mb-4">
                  <input list="hosting-plan1" type="text" class="form-control" v-model="fName" required>     
                    <span class="floating-label">First Name</span>
                  </div>
              <div class="col-md-6 mb-4">
                <input list="hosting-plan2" type="text" class="form-control" v-model="lname" required>
               <span class="floating-label">Last Name</span>
              </div>  
          </div>
          <div class="row">
              <div class="col-md-12 mb-4">
                <input list="hosting-plan3" type="text" class="form-control" v-model="email" required>
               <span class="floating-label">Email ID</span>
              </div> 
          </div>
           
          <div class="row form">
              <div class="col-md-6 mb-4">
                <input list="hosting-plan4" type="number" class="form-control" v-model="mobile" required>
                <span class="floating-label">Mobile Number</span>
              </div>
              <div class="col-md-6 mb-4">
                <input list="hosting-plan5" type="number" class="form-control" v-model="pincode" required> 
                <span class="floating-label">Pincode</span>
              </div>    
          </div>
           <div class="row form">
              <div class="col-md-6 mb-4">
                <input list="hosting-plan4" type="date" class="form-control inputtext" v-model="dob" required>
                <span class="floating-label">Date of birth</span>
              </div>
              <div class="col-md-6 mb-4">
                <input list="hosting-plan5" type="number" class="form-control" v-model="pincode" required> 
                <span class="floating-label">Annual Income</span>
              </div>    
          </div>

            <div class="row">
              <div class="col-md-12 mb-4">
                <input list="hosting-plan6" type="text" class="form-control" v-model="vehicle" required>
               <span class="floating-label">Looking for which vehicle?</span>
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

  <!-- image section -->
    <div class="container midddle p-0 col-md-10 col-12">
      <div class="row col-12 pt-4 mt-4">
          <div class="col-md-6 ipad-12">
             <div class="col-md-12 text-left">
                <h3 class=" pb-3"><strong>how it works?</strong></h3>
             </div>
              
                   <div class="row pb-3 col-12 m-0 p-0">
                      <div class="col-md-1 col-1 m-0 p-0">
                     <img src="../assets/finance_browsing.svg" width="15px">
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">Browse away</p>
                        <p class="mb-0 p-0 ptag pb-3">You will find a wide selection of refurbished bikes. Choose the one that gets your motor running!</p>
                          <p class="mb-0 p-0 ptag1 pl-2 pb-3"><strong>1. </strong> Need a quick call with our staff, don’t hesitate – just pick up the phone and dial <a href="tel:080-89874626"><strong style="color:#ffb52f"> 080-89874626</strong></a> </p>
                          <p class="mb-0 p-0 ptag1 pl-2" ><strong>2. </strong> Struggling to put the money on just one bike – why don’t you take a test ride? Visit our experience centre.</p>
                      </div>
                    </div>  

                    <div class="row pb-3 col-12">
                      <div class="col-md-1 col-1 m-0 p-0">
                     <img src="../assets/fianance_terms.svg" width="15px">
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">Begin the purchase</p>
                        <p class="m-0 p-0 ptag">Finally settled on a bike that you would just love to ride away? Great. Select the bike online and make the purchase.</p>
                      </div>
                    </div>  

                    <div class="row pb-3 col-12">
                      <div class="col-md-1 col-1 m-0 p-0"> 
                     <img src="../assets/finance_browsing.svg" width="15px">
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">Payment dilemma</p>
                        <p class="m-0 p-0 ptag">We make sure you don’t have any! So here are the options for you (details will be added later)</p>
                      </div>
                    </div>   

                    <div class="row pb-3 col-12">
                      <div class="col-md-1 col-1 m-0 p-0"> 
                     <img src="../assets/finance_dilema.svg" width="15px">
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">The bike is yours!</p>
                        <p class="m-0 p-0 ptag"> Yes, that’s how easy this is. Don’t let us send you off with the bike without a mandatory check-up. Post a rigorous check from our end there will be no going back. You wouldn’t want to ride away without it!</p>
                      </div>
                    </div> 
               
          </div>
        <div class="col-md-6 ipad-12 text-right photosize">
          <img src="../assets/bf2.png" width="100%">
        </div>
     
    </div>
    </div>
  
  <hr>
   <!--image section -->
  
   <div class="col-md-8 margin text-center pb-3 display1 ">
        <h3 class="m-4 p-1 lendh3">Our lending partners</h3>
        <p class="lendp">We work with a few trusted banks and lending partners like</p>
         <div class="row mt-4 pb-4 margin-left">
             
                    <div class=" col-2 margin-top text-center size"                 
                      v-on:click="set('Headquartered in Mumbai, it offers a range of financing solutions. They use contemporary technologies to provide superior quality financing products and services.',1)"> 
                      <img v-bind:class="{ gray: active != 1 }" class="size1" src="../assets/lend/idfcmobile.png" width="70%">      
                    </div>
                    <div class=" col-2 text-center text-left size"
                     v-on:click="set('Offers a wide range of financing products. It started giving two-wheeler loans in 2013.',2)">
                        <img v-bind:class="{ gray: active != 2 }" class="size1" src="../assets/lend/heromobile.png" width="100%">
                    </div>
                    <div class=" col-2 text-center text-left size "
                    v-on:click="set('ZestMoney, founded in 2016, is the fastest growing consumer lending fintech company in India. They offer instant financing using modern technology.',3)">
                            <img v-bind:class="{ gray: active != 3 }" class="size1" src="../assets/lend/zestmobile.png" width="100%">
                    </div>            
                    <div class=" col-2  text-center text-left size"
                    v-on:click="set('MoneyTap gives you an instant approval for credit online for anything that you want.',4)">
                            <img v-bind:class="{ gray: active != 4 }" class="size1" src="../assets/lend/moneytapmobile.png" width="100%">   
                    </div>
                     <div class=" col-2  text-center text-left size"
                     v-on:click="set('India’s leading peer-to-peer lending company, allows you to acquire instant loan through an online platform.',5)">
                      <img v-bind:class="{ gray: active != 5 } " class="size1" src="../assets/lend/lendboxmobile.png" width="100%">   
                    </div>
                   
                </div>

                <p class="lendp1" style="color:#001232">{{data}}</p>
  </div>
<div class="col-md-8 margin text-center pb-5 display">
        <h3 class="m-4 p-1 lendh3">Our lending partners</h3>
        <p class="lendp">We work with a few trusted banks and lending partners like</p>
         <div class="row mt-4 p-4 margin pl-5 col-12">
               <div class="col-md-1 col-1"></div>
                    <div class="col-md-2 col-12 text-center size"                 
                      v-on:click="set('Headquartered in Mumbai, it offers a range of financing solutions. They use contemporary technologies to provide superior quality financing products and services.',1)"> 
                      <img v-bind:class="{ gray: active != 1 }" class="size1" src="../assets/lend/idfc.png" width="100%">      
                    </div>
                    <div class="col-md-2 col-12 text-center text-left size"
                     v-on:click="set('Offers a wide range of financing products. It started giving two-wheeler loans in 2013.',2)">
                        <img v-bind:class="{ gray: active != 2 }" class="size1" src="../assets/lend/herocolored.png" width="100%">
                    </div>
                    <div class="col-md-2 col-12 text-center text-left size "
                    v-on:click="set('ZestMoney, founded in 2016, is the fastest growing consumer lending fintech company in India. They offer instant financing using modern technology.',3)">
                            <img v-bind:class="{ gray: active != 3 }" class="size1" src="../assets/lend/zestcolored.png" width="100%">
                    </div>            
                    <div class="col-md-2 col-12  text-center text-left size"
                    v-on:click="set('MoneyTap gives you an instant approval for credit online for anything that you want.',4)">
                            <img v-bind:class="{ gray: active != 4 }" class="size1" src="../assets/lend/moneytapcolored.png" width="100%">   
                    </div>
                     <div class="col-md-2 col-12  text-center text-left size"
                     v-on:click="set('India’s leading peer-to-peer lending company, allows you to acquire instant loan through an online platform.',5)">
                      <img v-bind:class="{ gray: active != 5 } " class="size1" src="../assets/lend/lenboxcolored.png" width="100%">   
                    </div>
                    <div class="col-md-1"></div>
                </div>

                <p class="lendp1" style="color:#001232">{{data}}</p>
  </div>
 


<hr>
   <!-- question -->
      <div class="col-md-12 middle col-12">
     
      <div class="col-md-12 text-center">
        <p class="font hit">Questions?</p>
      </div>

      <div class="container col-md-10 col-12 middle">
         <div class="row col-md-12 col-12 mb-4">
             <div class="col-md-6 col-12  text-center border-right no-border">
                 <p class=""><i  class="fa fa-lg fa-phone pr-2 pt-1"></i>
                 <strong><a style="color:#ffb52f" class="phone" href="tel: +91 9742744444">+91 9742744444</a></strong></p>           
            </div>
             <div class="col-md-6 col-12 text-center">   
                  <p class=""><i  class="fa fa-envelope pr-2 pt-1"></i>Email us: <a style="color:#ffb52f" href="mailto:info@bikex.in">info@bikex.in</a></p>
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
      data:'',
      img:'',
      active:0,
      fName:'',
      lname:'',
      email:'',
      mobile:'',
      pincode:'',
      dob:'',
      vehicle:'',
      message:'',
      loading:false
    }
  },
 methods:{
  set(text, active){
    this.data = text
    this.active = active
  },
  apply(){

  }
 },
     mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
    },
}
</script>
<style scoped>
.margin{
  margin:0 auto;
}
.inputtext {
outline: none !important;
}

@media only screen and (min-width: 1200px) {
  .display1 {display: none;}
}
.photosize{
   
    max-width:100% !important;
    height:auto !important;

}

.ghover:hover{
  color:none;
  cursor: pointer;
}

.gray{
      color:gray;
      -webkit-filter: grayscale(1); /* Webkit Nightlies & Chrome Canary */
      -webkit-transition: all .0s ease-in-out;
      cursor: pointer;
      
}
.gray:hover{
  color: none;
      -webkit-filter: grayscale(0);
      /* -webkit-transform: scale(1.01); */
}
.lendp1{
  font-size:15px;
  font-weight: 700
}
.margin{
  margin:0 auto;
}
.lendh3{
  font-size:40px !important;
  font-weight: 700 !important;
}
.lendp{
  font-weight:600;
  color:gray;
  letter-spacing: 0.5px;
}
.sell-top{
  background-color: rgba(231, 227, 161, 0.1);
  background-image: url('../assets/back.png'); 
  padding:20px !important;
}
.ptag1{
  font-size:14px;
  color:black;
  letter-spacing: 0.5px;
}
@media only screen and (max-width: 600px) {
          .container .row{
          margin:0;
          padding:0
          }
          .lendh3{
            font-size:25px !important 
          }
          .lendp{
            font-size:12px !important;
          }
          .lendp1{
            font-size:12px !important;
          }
          .col-2 {  
              flex: 0 0 19.666667%;
              max-width: 29.666667%;
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
            padding-top:4px;
            font-weight: bold;
          }
          .middle{
          margin:0;
          padding:0
          }
          .border-right{
            margin:0;
            padding:0
          }
          .margin-bottom{
            margin-bottom: 15px;
          }
          .size1{
            width:70% !important;
          }
          /* .display{
            display: none !important;
          } */
          .photosize{
   
    max-width:100% !important;
    height:auto !important;

}

      }


.hit{
font-weight: bold;
margin-left: 5px;
font-size: 24px;
}
.py-1{
  font-weight: 400;

}
.ptag{
  letter-spacing: 0.5px;
  font-size:14px;
  font-weight: 400;
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
}

.features-icons .features-icons-item:hover .features-icons-icon i {
}
 .text{
   text-align: left;
 }
    .text1{
   text-align: left;
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
  font-size:14px;
  letter-spacing: 0.5px;
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

@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1){
    .ipad-12{
      flex: 0 0 100% !important;
    max-width: 100% !important;
    }
    .margin-bottom{
      margin-bottom: 20px;
    }
    .margin-top{
        margin-top: 10px;
    }
    .margin-left{
      margin-left: 30px;
    }
  }
@media only screen and (max-width: 1200px) {
  .display{
    display: none
  }
  }
/* modal */
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
.scrollable-menu {
    height: auto;
    max-height: 200px !important;
    overflow-x: hidden;
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

</style>