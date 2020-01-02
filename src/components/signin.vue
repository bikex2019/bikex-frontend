
<template>
    <div class="login col-md-6 center mb-4 mt-3 p-4">
         <div class="modal-content m-0 p-0">
      <div class="modal-header m-0 p-0">
        <div class="back mt-5 ml-3 pt-3">
          <h2 class="modal-title m-0 p-0" id="exampleModalLabel">SIGNUP</h2>
        </div>
         <!-- <img src="../assets/LOGIN.svg" width="130px" class="mt-5"> -->
        <!-- <button type="button" class="close pr-4 pt-4" data-dismiss="modal" aria-label="Close">
          <img src="../assets/close-button.svg" width="22px">
        </button> -->
      </div>
      <div class="modal-body">
    <div class="row text-center col-md-10"  style="margin:0 auto">
                <div class="col-md-12 mt-2">
                    <p class="error my-3 m-0 p-0">{{response_message}}</p>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <input type="text" v-model="firstname" class="inputText form-control" required />
                  <span class="floating-label" >First Name <span style="color:red">*</span></span>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <input type="text" v-model="lastname" class="inputText form-control" required />
                  <span class="floating-label" >Last Name<span style="color:red">*</span></span>
                </div>
                 <div class="col-md-12 mb-4">
                  <input type="number" v-model="phone" class="inputText form-control" required />
                  <span class="floating-label" >Phone<span style="color:red">*</span></span>
                </div>
                <div class="col-md-12">
                    <p class="error">{{emessage}}</p>
                </div>
                 <div class="col-md-12 mb-4">
                  <input type="email" v-model="email" class="inputText form-control" required @blur="checkmail" />
                  <span class="floating-label" >Email<span style="color:red">*</span></span>
                </div>
                  <div class="col-md-12 mb-4">
                  <input type="password" v-model="password" class="inputText form-control" required />
                  <span class="floating-label" >Password<span style="color:red">*</span></span>
                </div>
                <div class="col-md-12">
                    <p class="error">{{pmessage}}</p>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="password" v-model="repeat" class="inputText form-control" required @blur="match" />
                  <span class="floating-label" >Repeat password<span style="color:red">*</span></span>
                </div>
            
                <div class="col-md-12 text-center p-0 m-0">
                    <div class="col-md-12 p-3 text-center labels">
                    <p>Please fill all the mandatory (<span style="color:red">*</span>) fields.</p>
                </div>
                    <button class="action-button"  :disabled="disable" v-on:click="signup">
                        <span v-if="!loading">SIGNUP</span>
                       <div v-else class="spinner-border spinner-border-sm"></div>
                    </button>
                </div>
                <div class="col-md-12 p-3 text-center labels">
                   Have a BikeX account? <router-link to="/login"><span style="color:#f6b949">Log in</span></router-link>
                </div>
              
            </div>
      </div>
    </div>

<div id="myModal" class="modalss" v-if="otp_sent">

  <!-- modalss content -->
  <div class="modalss-content">
    <span class="close" v-on:click="otp_sent != otp_sent">&times;</span>
                <p class="mt-5 m-0 p-0">OTP has been sent to {{phone}}</p>
    <div class="col-md-12 mb-4 mt-5 p-0">
                  <input type="number" v-model="otp" class="inputText form-control" required />
                  <span class="floating-label" >Enter OTP and Verify</span>
    </div>
    <div class="col-md-12 text-center p-4">
                    <button class="action-button"  v-on:click="otpverify">
                        <span v-if="!otp_load">Verify</span>
                       <div v-else class="spinner-border spinner-border-sm"></div>
                    </button>
        <p style="color:red" class="mt-3">{{otp_message}}</p>

        <p>Didn't receive code? <span class="resend" v-on:click="resendotp">Resend</span></p>
    </div>
  </div>

</div>


    </div>
</template>

<script>
export default {
    data(){
        return{
            firstname:'',
            lastname:'',
            phone:'',
            email:'',
            password:'',
            repeat:'',
            loading:'',
            password_message:'',
            email_message:'',
            data:[],
            response_message:'',
            users:[],
            otp_sent:false,
            otp:'',
            otp_message:'',
            otp_load:false
        }
    },
        created(){
        let auth = localStorage.getItem('token')
        if(auth){
            alert('already signed in')
            this.$router.push('/profile')
        }
          this.$http.get('https://backend-bikex.herokuapp.com/api/customers')
          .then(response=>{
          this.users = response.body
         })
  
    },
    methods:{
        match(){
            if(this.password == this.repeat){
                this.password_message = ''
            }else{
                this.password_message="Password do not match"
            }
        },
        checkmail(){
            this.$http.post('https://backend-bikex.herokuapp.com/api/customers/emailverify',{
            email:this.email,
            }).
            then(response=>{
            if(response.body.err == 1)
            {this.email_message=response.body.msg}else{
                this.email_message=''
            }
            }).catch(error => { 
                this.response_message = error.body
            })   
        },
        signup(){
            if(this.password.length > 5){
                this.loading=true
            this.$http.post('https://backend-bikex.herokuapp.com/api/customers/sendotp',{
              phone:this.phone,
            }).
            then(response=>{
                if(response.body.type == 'success'){
                    this.loading = false
                    this.otp_sent = true
                    window.console.log(response)
                }else{
                    this.response_message = 'Some error occured plaease try again.';
                }
            }).catch(error => { 
                this.response_message = error.body.msg;
                this.loading= false
            })   
            }else{
                this.response_message = 'Password must be more than 5 characters.'
            }
        },
        resendotp(){
            this.$http.post('https://backend-bikex.herokuapp.com/api/customers/otp-retry',{
              phone:this.phone,
            }).
            then(response=>{
                if(response.body.type == 'success'){
                    this.otp_message = 'OTP re-send sucessfully.'
                }else{
                    this.otp_message = 'Some error occured plaease try again.';
                }
            }).catch(error => { 
                this.otp_message = error.body.msg;
            })   
        },
        otpverify(){
            this.otp_load = true
             this.$http.post('https://backend-bikex.herokuapp.com/api/customers/verifyotp',{
              phone:this.phone,
              otp:this.otp
            }).
            then(response=>{
                this.otp_load = false
                // this.loading = false
                // this.otp_sent = true
                if(response.body == 'OTP verified successfully'){
                        this.addtodatabase()
                }else{
                    this.otp_message = 'Please input valid OTP.'
                }
                window.console.log(response)
                
            }).catch(error => { 
                this.response_message = error.body.msg;
                this.otp_load= false
            })   

            // window.console.log('abhinash')
        },
        addtodatabase(){
            this.$http.post('https://backend-bikex.herokuapp.com/api/customers',{
              firstname:this.firstname,
              lastname:this.lastname,
              phone:this.phone,
              email:this.email,
              password:this.password,
            }).
            then(response=>{
            this.data = response.body;
            this.loading = false
            // alert('sucessfull')
            this.$router.push({path:'/login'})
            }).catch(error => { 
                this.response_message = error.body.msg;
                this.loading= false
            })   
           },
        login(){
        this.$router.push({path:'/login'})  
        },
    },
        computed:{
            pmessage(){
                return this.password_message
            },
            emessage(){
                return this.email_message
            },
            disable(){
                if(this.email == '' || !this.repeat || this.password != this.repeat || !this.phone || this.emailindex == -1|| this.dotindex == -1 || !this.firstname || !this.lastname){
                    return true
                }
                else{
                    return false
                }
            },
            emailindex(){
                return this.email.indexOf('@')
            },
            dotindex(){
                return this.email.indexOf('.')
            }
        }
}
</script>

<style  scoped>
.error{
    color: red;
}
.center{
    margin: 0 auto
}
.modal-header{
  background-color: rgb(0, 18, 51);
  background-image: url("../assets/heroes.png");
  background-size: cover;
  overflow: hidden

}
.resend{
    color:#ffb52f;
    cursor: pointer;
}
 .modal-title{
    color: #fefefe;
    font-size: 30px;
    font-weight: 700
  }
   .labels{
    font-size: 13px;
    font-weight: 500;
  }
.login{
    background-color: #fefefe;
}
button.action-button:disabled {
    opacity: 0.4;
    cursor: text;
}
button.action-button:disabled:hover {
    opacity: 0.4;
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
    width: 60%;
    border-radius: 21px
}
.action-button:hover{
        background-color:  #000a1b;
        opacity: 0.9;
        color:cornsilk;
}
@media only screen and (max-width: 600px) {
  .mobile{
      display: none !important
  }
  .modalss-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 90% !important;
}
}
/* button.action-button.disable{
    opacity: 0.8 !important;
    
}
button.action-button.disable:hover{
    background-color: transparent !important;
    color: #ffb52f
} */
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


.modalss {
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* modalss Content */
.modalss-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}

</style>