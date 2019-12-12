<template>
  <div class="checkout col-md-10 center">
    <div class="row mb-4">
        <div class="col-md-4 col-12">
          <div class="card" v-for="(data, index) in displayImage" :key="index">
            <img :src="data.path" alt="" width="100%">
            <div class="card-description text-center p-0 m-0">
                <p class="header pt-3 m-0 p-0" v-for="(vehicle, index) in vehicle" :key="index">Total Price Rs. {{vehicle.selling_price}}</p>

                 <div class="row mt-3 p-0 m-0 px-5">
                <div class="col-md-6 m-0 p-0 text-left">
                    <p>
                        <i class="fa fa-check checked mr-2" style="font-size:8px;" aria-hidden="true"></i>
                        <span class="paragraph1">RTO</span>
                    </p>
                </div>
                <div class="col-md-6 m-0 p-0 text-left">
                     <p>
                        <i class="fa fa-check checked mr-2" style="font-size:8px;" aria-hidden="true"></i>
                        <span class="paragraph1">INSURANCE</span>
                    </p>
                </div>

                <div class="col-md-6 m-0 p-0 text-left">
                    <p>
                        <i class="fa fa-times not-checked mr-2" style="font-size:8px;" aria-hidden="true"></i>
                        <span class="paragraph1">THIRD PARTY</span>
                    </p>
                </div>
                <div class="col-md-6 m-0 p-0 text-left">
                     <p>
                        <i class="fa fa-check checked mr-2" style="font-size:8px;" aria-hidden="true"></i>
                        <span class="paragraph1">TRANSFER</span>
                    </p>
                </div>
            </div>
    </div>
     
</div>
    <div class="loader" v-if="loading">
            </div>
            <div class="loader-sm mt-3" v-if="loading"></div>
            <div class="loader-sm mt-3" v-if="loading"></div>
            <div class="loader-sm mt-3" v-if="loading"></div>
            <div class="loader-sm mt-3" v-if="loading"></div>
      </div>

      <div class="card col-md-8 mb-4 p-5">
            <p class="top-header mt-0">How would you like to pay?</p>
            <div class="row border m-0 p-0 mb-4">
                <div class="col-md-12 m-0 p-0">
                    <p class="caption m-0 pl-3 p-0 ">MOST POPULAR OPTIONS</p>
                </div>
                <div class="col-md-12 mb-4 mt-4">
                    <p class="header">FINANCE WITH PARTNERS</p>
                    <p class="paragraph">We work with over 5+ banks to get you a competitive rate.</p>

                <div class="row mt-4 p-4">

                    <div class="col-md-2   text-center mt-1">
                         <a href=" https://app.moneytap.com/qual/?product=CL&utm_source=mpx_ontrack&utm_medium=sms&utm_campaign=Pilot1&utm_content=CL" target="_blank"><img src="../assets/moneytap.png" width="100%"></a>
                    </div>
                    <div class="col-md-2 text-center text-left">
                        <img src="../assets/zest.jpg" width="100%">
                    </div>
                        <!-- <div class="col-md-2 text-center text-left  mt-2">
                            <img src="../assets/idfc.jpg" width="100%">
                    </div> -->
               
                    <div class="col-md-3 text-center text-left mb-3">
                            <img src="../assets/lendbox.jpg" width="100%">   
                    </div>
                     <div class="col-md-2 col-8 text-center text-left mb-3">
                            <img src="../assets/fincorp.png" width="180%">   
                    </div>
                </div>
                


                </div>
                <!-- <div class="col-md-3 mt-4">
                    <button class="action-button">APPLY</button>
                </div> -->
            </div>

            <div class="row border m-0 p-0 mb-4">
                <div class="col-md-8 mb-4 mt-4">
                        <p class="header">PAY WITH CASH</p>
                    <p class="paragraph">Transfer funds directly from your bank account.</p>
                </div>
                <div class="col-md-4 mt-4">
                 <button class="action-button" @click="payment">APPLY</button> 
                </div>
            </div>

            <div class="row border m-0 p-0 mb-4">
                <div class="col-md-8 mb-4 mt-4">
                    <p class="header">CASH ON DELIVERY</p>
                    <p class="paragraph">Pay at the door </p>
                </div>
                <div class="col-md-4 mt-4">
                 <button class="action-button" v-on:click="payment">APPLY</button> 
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
            vehicle:[],
            displayImage:[],
            loading:true
        }
    },
    created(){
        this.id = this.$route.params.id
           this.$http.get('https://backend-bikex.herokuapp.com/api/procurements/'+ this.id)
          .then(res=>{
          this.vehicle = res.body
          })
           this.$http.get('https://backend-bikex.herokuapp.com/api/upload-display/' + this.id)
            .then(resp=>{this.displayImage= resp.body.data;this.loading = false;window.console.log(this.displayImage)});
    },
    methods:{
        payment(){
             this.$router.push('/payment/' + this.id)
        }
    }
}
</script>



<style scoped>
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
 background: #ffb52f none repeat scroll 0 0;
    border: 1px solid transparent;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 400;
    height: inherit;
    letter-spacing: 1px;
}
.action-button{
    border: 1.5px solid #ffb52f;
    background-color: white;
    color: #ffb52f;
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
        background-color:  #ffb52f;
        color:cornsilk;
}
.header{
    font-size:19px;
    font-weight: 900;
    letter-spacing: 1px
}
.top-header{
    font-size:27px;
    font-weight: 900;
    letter-spacing: 1px;
}
    .paragraph{
    font-size:15px;
    font-weight: 500;
    letter-spacing: 1px
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