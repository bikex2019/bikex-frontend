<template>
  <div class="login col-md-10 col-12 mt-4 mb-4 center"> 
    <div class="modal-content m-0 p-0">
      <div class="modal-header m-0 p-0">
        <div class="back mt-5 pt-5 ml-3 pt-2">
          <h2 class="modal-title m-0 p-0" id="exampleModalLabel">CHECKOUT</h2>
        </div>
      </div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item px-2" v-bind:class="{ active: open == 'review' }"
          v-on:click="open = 'review'" style="cursor:pointer">REVIEW</li>
          <li class="breadcrumb-item px-2 " aria-current="page" v-bind:class="{ active: open == 'payment' }"
          v-on:click="open = 'payment'" style="cursor:pointer">PAYMENT</li>
          <li class="breadcrumb-item px-2" aria-current="page" v-bind:class="{ active: open == 'shipping'  }">SHIPPING</li>
        </ol>
      </nav>
      <div class="modal-body">
        <div class="row text-center col-md-12 m-0 p-0">
              <div class="card col-md-4 col-12 m-0 p-0" v-for="(data, index) in displayImage" :key="index">
                <img :src="data.path" :href="data.path" width="100%" style="cursor:pointer">
                <div class="card-description text-center p-0 m-0">

                  <h3 >
               
                </h3> 

          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between p-2 bottom">
              <div class="text-left">
                <h4 class="my-0" v-for="(models, index) in models" :key="index">
                   <span>{{models.make}} </span> <span>{{models.modal_name}}</span>
                </h4>
                 <small class="text-muted " v-for="(vehicle, index) in vehicle" :key="index">
                  <span class="" > Color:</span> {{vehicle.color}}
                 </small>
              </div>
              <h2 class="pt-2">{{price | currency}}</h2>
            </li>
            <li class="list-group-item d-flex justify-content-between p-1 px-3" style="border:none">
              <div>
                <h6 class="my-0">Tefflon Coating</h6>
                <!-- <small class="text-muted">Brief description</small> -->
              </div>
              <span class="text-muted">{{Number(tefflon) | currency}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between p-1 px-3" style="border:none">
              <div>
                <h6 class="my-0">
                  Extended Warranty
                </h6>
                <!-- <small class="text-muted">Brief description</small> -->
              </div>
              <span class="text-muted">{{Number(extended_w) | currency}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between p-1 px-3" style="border:none">
              <div>
                <h6 class="my-0">RSA</h6>
                <!-- <small class="text-muted">Brief description</small> -->
              </div>
              <span class="text-muted">{{Number(rsa) | currency}}</span>
            </li>
                <li class="list-group-item d-flex justify-content-between p-1 px-3" style="border:none">
              <div>
                <h6 class="my-0">Comprehensive</h6>
                <!-- <small class="text-muted">Brief description</small> -->
              </div>
              <span class="text-muted">{{Number(comprehensive) | currency}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between p-1 px-3" style="border:none">
              <div class="text-success">
                <h6 class="my-0">Promo code</h6>
              </div>
              <span class="text-success">{{Number(discount) | currency}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bottom  p-1 px-3">
              <div class="text-success">
                <h6 class="my-0">Delivery</h6>
              </div>
              <span class="text-success">{{Number(delivery) | currency}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between bottom p-2">
              <span class="total">Total (INR)</span>
              <strong>{{Number(price_comp) | currency}}</strong>
            </li>
          </ul>
            </div>
        
    </div>
            <div class="card col-md-4 m-0 p-0" v-if="loading">
              <div class="loader"></div>
              <div class="loader-sm mt-3"></div>
              <div class="loader-sm mt-3"></div>
              <div class="loader-sm mt-3"></div>
              <div class="loader-sm mt-3"></div>
               <div class="loader-sm mt-3"></div>
                <div class="loader-sm mt-3"></div>
            </div>

            <div class="col-md-8 col-12 text-left p-4 mobile-margin" v-if="open == 'review'">
              <p><strong>Add-ons</strong></p>
              <div class="col-md-12 m-0 p-0 row addons">
                <div class="checkbox text-left col-md-12 py-2 m-0 p-0">
                  <input type="checkbox" :value="550" id="tefflon" v-model="tefflon" required>
                  <label for="tefflon" class="m-0 p-0 pl-5">Teflon Coating- ₹550
                  </label>
                  <small class="pl-5 p-0 m-0">
                    - protects the paint of your bike.
                  </small>
                </div>
                <div class="checkbox text-left col-md-12 py-2 m-0 p-0">
                    <input type="checkbox" :value="650" id="extended_w" v-model="extended_w" required>
                    <label for="extended_w" class="m-0 pl-5">Extended warranty- ₹650</label>
                    <small for="extended_w" class="pl-5 p-0 m-0">- comes with 6 months additional warranty.</small>
                </div>
                <div class="checkbox text-left col-md-12 py-2 m-0 p-0">
                    <input type="checkbox" :value="350" id="rsa" v-model="rsa" required>
                    <label for="rsa" class="m-0 pl-5">RSA (Road Side Assistance)- ₹350</label>
                    <small class="pl-5 p-0 m-0">- 24 hrs breakdown service.</small>
                </div>
                <div class="checkbox text-left col-md-12 py-2 m-0 p-0">
                    <input type="checkbox" :value="550" id="comprehensive" v-model="comprehensive" required>
                    <label for="comprehensive" class="m-0 pl-5">Comprehensive Insurance- ₹550</label>
                <small class="pl-5 p-0 m-0">- includes own damage coverage.</small>
                </div>
                
                <div class="coupon col-12 col-md-12 m-0 p-0 mt-5">
                  <p><strong>Apply Coupon</strong></p>
                  <p class="error">{{coupon_message}}</p>
                  <p class="p-0 m-0 mb-1">Enter your coupon code if you have one!</p>
                  <div class="col-md-12 m-0 p-0 d-flex">
                    <input type="text" placeholder="Enter Coupon code here" class="coupon_input p-2" v-model="coupon">
                    <button class="action-button ml-3" v-on:click="check_coupon">
                      <span v-if="!coupon_check">Apply Code</span>
                      <span v-else>Loading..</span>
                    </button>
                  </div>
                </div>

                <div class="pricing row col-12 col-md-12 m-0 p-0 mt-5">
                 <div class="col-md-8 m-0 p-0">
                    <p><strong>Price Details</strong></p>
                  <p  class="m-0 p-0">Payable Amount (Inclusive of Add-ons)</p>
                  <h2 v-if="!loading" class="m-0 p-0">{{price_comp | currency}}</h2>
                  <h1 v-else>Loading..</h1>
                 </div>
                 <div class="col-md-4 p-0 pull-right">
                    <button class="action-button2 ml-0 mt-5" v-on:click="go_payment">Place Order</button>
                 </div>
                </div>

              </div>
            </div>
            <div class="col-md-8 col-12 mobile-margin" v-if="open == 'payment'">
                <!-- <checkout :v_id="10007"></checkout> -->
              <div class="card col-md-12 mb-4 p-2 text-left">
                <p class="top-header mt-0">How would you like to pay?</p>
                <div class="row border m-0 p-0 mb-4">
                  <div class="col-md-12 m-0 p-0">
                      <p class="caption m-0 pl-3 p-0 ">MOST POPULAR OPTIONS</p>
                  </div>
                    <div class="col-md-12 py-3">
                        <p class="header m-0 p-0 ">FINANCE</p>
                        <p class="paragraph m-0 p-0">We've partnered with brands you trust when it comes to money</p>

                        <div class="row mt-4 p-0">

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
                      <!-- <p class="p-3" style="color:#001232">{{data}}</p> -->
                        </div>
                    </div>
                <!-- <div class="col-md-3 mt-4">
                    <button class="action-button">APPLY</button>
                </div> -->
                  </div>
                  <div class="row border m-0 p-0 mb-4 py-3">
                      <div class="col-md-8">
                              <p class="header m-0 p-0 ">PAY NOW</p>
                          <p class="paragraph m-0 p-0">Debit/Credit Cards, EMIs, Net Banking</p>
                      </div>
                      <div class="col-md-4 mobile-top">
                      <button class="action-button2" v-on:click="go_shipping('Online Pay')">PROCEED</button> 
                      </div>
                  </div>

                  <div class="row border m-0 p-0 mb-4 py-3">
                      <div class="col-md-8">
                          <p class="header m-0 p-0 ">CASH ON DELIVERY</p>
                          <p class="paragraph m-0 p-0">Pay via cash/card upon delivery </p>
                      </div>
                      <div class="col-md-4 mobile-top ">
                      <button class="action-button2" v-on:click="go_shipping('Cash on Delivery')">PROCEED</button> 
                      </div>
                  </div>

                  <div class="row border m-0 p-0 mb-4 py-3">
                      <div class="col-md-8">
                              <p class="header m-0 p-0 ">NOT SURE YET?</p>
                          <p class="paragraph m-0 p-0">Reserve this vehicle at just ₹1,000</p>
                      </div>
                      <div class="col-md-4 mobile-top">
                      <button class="action-button2"  v-on:click="go_to_book">RESERVE NOW</button> 
                      </div>
                  </div>
                </div>
              </div>

              <div class="col-md-8 col-12 mobile-margin" v-if="open == 'shipping'">
                <payment :v_id="Number(id)" :payment_mode="payment_mode" :total_price="Number(price_comp)" :vehicle_status="Number(5)"
                :tefflon="Number(tefflon)" :extended_w="Number(extended_w)" :rsa="Number(rsa)" :comprehensive="Number(comprehensive)"
                ></payment>
              </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import payment from './payment'
// import checkout from './checkout'
export default {
    data(){
        return{
          active:0,
          data:'',
          img:'',
            open:'review',
            id:'',
            vehicle:[],
            models:[],
            displayImage:[],
            email:'',
            price:0,
            password:'',
            response_message:'',
            loading:true,
            tefflon:[],
            extended_w:[],
            rsa:[],
            comprehensive:[],
            promocode:0,
            coupon:'',
            coupon_check:false,
            coupon_message:'',
            discount:0,
            delivery:500,
            payment_mode:'',
        }
    },
    components:{
      payment,
      // checkout
    },
    created(){
      let i = 0
        this.id = this.$route.params.id
           this.$http.get('https://backend-bikex.herokuapp.com/api/procurements/'+ this.id)
          .then(res=>{
          this.vehicle = res.body
          this.price = this.vehicle[i].selling_price
          this.$http.get('https://backend-bikex.herokuapp.com/api/models/'+ res.body[i].model_id).then(response=>{
            this.models = response.body
          })
          })
           this.$http.get('https://backend-bikex.herokuapp.com/api/upload-display/' + this.id)
            .then(resp=>{this.displayImage= resp.body.data;this.loading = false;});
    },
    methods:{
      book(){

      },
       go_to_book(){
          this.$router.push('/booking/'+ this.id)
      },
    set(text, active){
    this.data = text
    this.active = active
  },
      go_payment(){
          this.open = 'payment'
      },
      go_shipping(id){
        this.payment_mode = id
        this.open = 'shipping'
      },
      check_coupon(){
        if(this.coupon){
          this.coupon_check= true
          if(this.coupon === 'ABHI500'){
         setTimeout(()=>{
          this.coupon_message = '500 Discount added!'
          this.discount = 500
           this.coupon_check= false
         }, 1000)
            }else{
            setTimeout(()=>{
                      this.coupon_message = 'Invalid coupon!'
                      this.coupon_check= false
          },200)
      }
        }else{
           this.coupon_message = 'Enter coupon!'
        }
      }
        },
        computed:{
          price_comp(){
            return this.price + Number(this.tefflon) + Number(this.extended_w)+
             Number(this.rsa)+ Number(this.comprehensive) +
            Number(this.delivery)-Number(this.discount)
          }
        }
}
</script>

<style  scoped>
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

.list-group-item h6, .total{
    font-size: 1rem;
    font-weight: 700;
}
.mobile_view{
  display: none
}
.bottom{
  border-bottom: 2px solid black;
  outline: none;
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0px;
}
.card{
  border: none
}
.coupon{
  padding: 7px;
  margin: 0
}
.coupon_input{
  width: 100%;
}

.error{
    color: red;
}
.modal-header{
  min-height: 150px;
  background-color: rgb(0, 18, 51);
  background-image: url("../assets/checkoutbg.png");
  background-size: cover;
  overflow: hidden

}
 .modal-title{
    color: #fefefe;
    font-size: 30px;
    font-weight: 700
  }
   .labels{
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase
  }
.center{
    margin: 0 auto
}
.login{
    background-color: #fefefe;
    margin-top: 50px !important;
    margin-bottom: 50px !important
}
@media only screen and (max-width: 600px) {
  .action-button {
    width: 60% !important;
    padding: 2px  !important
}
.mobile_view{
  display: block !important
}
  .mobile-margin{
    margin: 10px 0px !important;
    padding: 0px !important
  }
  .mobile{
      display: none !important
  }
  .inputText{
      width: 100% !important
  }
  .login{
       margin-top: 90px !important;
      text-align: center !important
  }
}
.modal-content{
  border:2px solid #FFB52F;
  border-radius: 12px;
  overflow: hidden;
}
 .bs-example{
        margin: 20px;        
    }
    /* Style to change separator  */
    .breadcrumb-item + .breadcrumb-item::before {
        content: ">";
    }
.inputText {
outline: none !important;
border: none;
border-bottom: 1px solid gray;
border-radius: 0px;
width: 100%
}
.inputText:focus{
    border-bottom: 1px solid #ffb52f;
}
input:focus, textarea:focus, select:focus{
  outline: none !important;
  box-shadow: none !important
}
.floating-label {
    font-size: 13px;
    font-weight: 500;
    position: absolute;
    pointer-events: none;
    left: 30px;
    top: 8px;
    transition: 0.2s ease all;
}

input:focus ~ .floating-label,
input:not(:focus):valid ~ .floating-label{
  top: -7px;
  padding: 0px 5px 0px 0px;
  background-color: #fefefe;
  left: 20px;
  font-size: 11px;
  opacity: 1;
  z-index: 1;
  outline: none !important;
  box-shadow: none !important
}
.action-button{
    border: 1.5px solid #001232;
    background-color: #000a1b;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    height: inherit;
    letter-spacing: 1px;
    padding: 13px 20px 11px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    width: 50%;
}
.action-button2{
    border: 1.5px solid #001232;
    background-color: #000a1b;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    height: inherit;
    letter-spacing: 1px;
    padding: 13px 20px 11px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    width: 100%;
}
.action-button:hover{
         background-color:  #000a1b;
        opacity: 0.9;
        color:cornsilk;
}
.action-button2:hover{
         background-color:  #000a1b;
        opacity: 0.9;
        color:cornsilk;
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
    background-color: rgb(216, 214, 214);
    opacity: 0.5
  }
  50%{
    background-color: rgb(173, 166, 166);
    opacity: 0.3
  }
  100%{
    background-color: rgb(199, 179, 179);
    opacity: 0.7
  }
}
.breadcrumb{
  background-color: transparent
}
input[type="checkbox"] { display: none; }

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 6px;
  margin-bottom: 20px;
  font: 14px/20px 'Open Sans', Arial, sans-serif;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 800;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"] + label:last-child { margin-bottom: 0; }

input[type="checkbox"] + label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  color:#001232;
  border: 1px solid #001232;
  position: absolute;
  left: 0;
  top: 0;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

/* checkout */
@media only screen and (max-width: 600px) {
    .mobile-top{
        margin-top: 10px !important
    }
}

.center{
margin:0 auto;
}
.checked{
        color: white;
        background-color: #ffb52f;
       border-radius: 3px;
       padding: 3px;
}
.not-checked{
    color: white;
    background-color: red;
    border-radius: 5px;
    padding: 3px 4px;
    
}
.caption{
 margin: 0;
 padding: 1;
 background: #001232 none repeat scroll 0 0;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    height: inherit;
    letter-spacing: 1px;
}
/* .action-button{
    border: 1.5px solid #001232;
    background-color: #000a1b;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    height: inherit;
    letter-spacing: 1px;
    padding: 13px 20px 11px;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    width: 100%;
}
.action-button:hover{
         background-color:  #000a1b;
        opacity: 0.9;
        color:cornsilk;
} */
.header{
    font-size:15px;
    font-weight: 700;
}
.top-header{
    font-size:18px;
    font-weight: 800;
}
    .paragraph{
    font-size:15px;
    font-weight: 500;
}
.paragraph1{
    font-size: 13px;
    font-weight: 500;
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
    background-color: rgb(216, 214, 214);
    opacity: 0.5
  }
  50%{
    background-color: rgb(173, 166, 166);
    opacity: 0.3
  }
  100%{
    background-color: rgb(199, 179, 179);
    opacity: 0.7
  }
}
</style>