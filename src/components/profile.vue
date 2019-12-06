<template>
    <div class="cpage margin mt-5">
        <div class="col-md-10 margin ">
            <div class="row mb-2">
                    <div class="col-md-3 border text-center">
                        <img src="../assets/account.svg" class="mt-3" alt="" width="100px" height="100px">
                            <h6 class="mb-4 mt-3"><span>{{profile.firstname}} </span> <span>{{profile.lastname}}</span></h6>
                            <p v-if="loading">Loading</p>
                            <div class=" mt-5 text-left pt-4 p-2">
                            <p class="text-center"><strong>My Information</strong></p>
                            <p class="text-center">Phone no: {{profile.phone}}</p>
                            <p class="text-center">Email id: {{profile.email}}</p>
                            </div>
                    </div>
                    <div class="col-md-9 margin ">
                   <div class="col-md-12 border ml-1 margin">  
                     <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a class="nav-link active head1" id="Finance-tab" data-toggle="tab" href="#Finance" role="tab" aria-controls="Finance" aria-selected="true">PROFILE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link head1" id="Refurbishing-tab" data-toggle="tab" href="#Refurbishing" role="tab" aria-controls="Refurbishing" aria-selected="false">WISH LIST</a>
                            </li>
                                    
                     </ul> 
                        <div class="tab-content mt-3 mb-3 col-md-12 border" v-if="loading_purchase == false && bookings.length>0">
                            <div class="tab-pane active" id="Finance" role="tabpanel"  v-for="(data, index) in bookings" :key="index">
                            <div class="pixel1 col-md-3 p-0 m-0  text-center">
                                 <p class="m-0 p-0">Order Id: {{data._id}}</p>
                             </div>
                            <hr>
                            <div class="row mt-3">
                                <div class="col-md-3">
                                   <img :src="data.image" alt="cd" width="100px" height="75px">
                                </div>
                                <div class="col-md-2 m-0 p-0 mt-3 ">
                                    <p class="pixel ">{{data.model}}</p>
                                    <p class="smallfont ">Color: blue</p>
                                </div>
                                
                                   <div class="col-md-2 m-0 p-0 mt-3 text-center ">
                                    <p class="pixel">Rs {{data.amount}}</p>
                                </div>
                                <div class="col-md-3 mt-3 text-center">
                                  <p class="" v-if="data.payment_status == 1">Paid</p>
                                   <p class="" v-if="data.payment_status == 3">Cash on Delivery</p>
                                </div>
                            </div>
                            <div class="row pixel mt-3">
                                <div class="text-left col-md-6" >
                                  <p class=""><span class="smallfont">Ordered On</span> {{data.date | moment("dddd, MMMM Do YYYY")}}</p>
                                </div>
                                <div class="text-right col-md-6" >
                                  <p class=""><span class="smallfont">Order Total</span> Rs {{data.amount}}</p>
                                </div>
                            </div>
                            </div>
                            <div class="tab-pane" id="Refurbishing" role="tabpanel" >
                                <div class="row">
                                    <p class="m-4 p-4">We are adding this feature soon</p>
                                 </div>
                            </div>
                        </div>
                        <div class="tab-content mt-3 mb-3 col-md-12 border" v-if="loading_purchase == false && bookings.length == 0">
                            <div class="tab-pane active" id="Finance" role="tabpanel">
                                <p>You have not made any bookings.</p>
                            </div>
                        </div>
                            <div class="loader" v-if="loading_purchase"></div>
                            <div class="loader-sm mt-3" v-if="loading_purchase"></div>
                            <div class="loader-sm mt-3" v-if="loading_purchase"></div>
                            <div class="loader-sm mt-3" v-if="loading_purchase"></div>
                            <div class="loader-sm mt-3" v-if="loading_purchase"></div>
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
            id:'',
            profile:[],
            bookings:[],
            loading:true,
            loading_purchase:true
        }
    },
        beforeCreate(){
        let auth = localStorage.getItem('token')
        this.id = localStorage.getItem('temp')
        if(!auth){
            this.$swal({
                position: 'top-end',
                icon: 'error',
                title: 'Please Log in',
                showConfirmButton: false,
                timer: 2500
                })
                this.$router.push('/login')
        }
         this.$http.get('https://backend-bikex.herokuapp.com/api/customers/'+ this.id)
          .then(response=>{
          this.profile = response.body
          this.loading = false
         }).catch((err)=>{
              window.console.log(err)
              this.loading =  false
         })

          this.$http.get('https://backend-bikex.herokuapp.com/api/purchases/customer/'+ this.id)
          .then(response=>{
          this.bookings = response.body
          this.loading_purchase = false
         }).catch((err)=>{
              window.console.log(err)
              this.loading_purchase =  false
         })


    },
    methods:{
        logout(){
            localStorage.removeItem('token')
             localStorage.removeItem('temp')
             this.$router.push('/login')
        }
    }

}
</script>

<style scoped>
.gradient{
    background: linear-gradient(to bottom, #ffb53f 50%, #ffccff 100%);
}
.pixel1{
    font-size: 14px;
    background-color:blue;
    color:white;   
    border-bottom: 1px solid #e6e6e6;
 
}
.pixel{
      box-shadow: none;
    padding: 0;
    border: none;
    font-size: 14px;
    text-decoration: none;
    color: #212121;
    margin-bottom: 10px;
    
}
.smallfont{
    color: #878787;
    font-size: 12px;
}
.background{
    background-color:#efc5ca;
}
 .margin{
     margin:0 auto;
 }
 @media only screen and (max-width: 780px) {
    .overview-content {
        margin-top: 19px !important;
        text-align: center
    }
    .nav-link{
        padding: 7px !important;
    }
    #myBtn{
    display: none !important
    }
    .no-mobile-pad{
        padding: 0px !important;
        margin: 0px !important;
    }
    .single-services{
        box-shadow: none !important
    }
    .question-area{
    text-align: center !important
    }
    .services-area{
        box-shadow: 0 2px 4px rgba(0,0,0,.07) !important;
        border: 1px solid #dee2e6!important;
        margin-bottom: 50px !important;
    }
    .title{
        text-align: center !important
    }
    .tab-pane{
        padding: 0px 10px 0px 10px;
        min-height: 100%
    }
    .nav-tabs{
        padding: 0px 0px 0px 10px;
    }
    .services-icon img{
        width: 80%
    }
    .services-text h5{
        margin: 0 !important;
        padding: 0!important;
        text-align: left
    }
    .single-services{
        padding: 20px 0px !important
    }

}
.tab-pane h5{
text-transform: uppercase;
font-size: 16px;
font-weight: bold
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
.margin{
    margin: 0 auto
}
 .resize_fit_center {
    width:350px;
    height:266px;
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
    padding: 6px 35px 11px 5px;
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
    width: 100%;
    cursor: pointer;
}
.overview-content{
  margin-top: 65px;
}
.overview-content h1 , .overview-content h2 {
    color: #001232;
    font-weight: 400;
    font-size: 16px;
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
.laptop-main{
    margin-bottom: 50px !important;
}
/* .laptop-main h2{
    letter-spacing: 1.5px
} */
    
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

/* bikex values */

.main{
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 4px rgba(0,0,0,.07); 
}
.imager img{
    width:80%
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

  .nav-link{
    font-size: 15px;
    font-weight: bold;
    color: black;
  }
  .trust-content{
    font-size: 15px;
    padding: 0;
    margin: 0;
    text-align: justify
  }
@media screen and (max-width: 775px) {
  .nav-link{
    font-size: 10px;
    color: black;
    display: block;
    padding: 8px 10px;
  }
  .title h2, .head2{
    font-size:15px;
    font-weight:bold;
  }
  .imager img{
  display: none
}
 .trust-content{
    font-size: 13px;
    padding: 0;
    margin: 0;
    text-align: justify
  }
}


/* just for laptop / / just for laptop // just for laptop // just for laptop */
@media screen and (min-width: 700px){
.laptop-container{
    margin-top: 50px !important;
    padding-left:30px !important
        }

        .button{
        padding-top: 30px;
        }
        .services-icon{
            width: 100% !important
        }
        .services-text > h5 {
            margin: 0 !important
        }
}
/* just for laptop // just for laptop // just for laptop // just for laptop */


.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color:#ffb53f;
    border-color:none;
   

}
.viewbikes-button{
    border-radius: 09px;
    text-transform: uppercase;
    opacity: 0.9;
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
.container{
    background-color: #ffffff;  
}

.fonts{
  font-family: 'Poppins', sans-serif;

}
.single-services {
    box-shadow: 0 0 2px 0.5px rgba(0, 0, 0, 0.22);
    padding: 30px 10px 25px;
    min-height: 100%;
}
.services-icon {
    /* margin-right: 20px; */
}
.services-text > h5 {
    color: #4f4e4e;
    font-size: 15px;
    font-weight: 400;
    margin: 12px 0 15px;
}
.services-text > p {
    margin: 5px 0px;
    text-align: justify;
    font-size: 13px;
}
.single-services:hover .services-icon img {
    animation: 500ms ease-in-out 0s normal none 1 running zoomIn;
}


.error{
    color: red;
}
.center{
    margin: 0 auto
}
.login{
    background-color: #fefefe;
}
@media only screen and (max-width: 600px) {
  .mobile{
      display: none !important
  }
}
button.action-button.disable{
    opacity: 0.8 !important;
    
}
button.action-button.disable:hover{
    background-color: transparent !important;
    color: #ffb52f
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
