
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
                    <p class="error m-0 p-0">{{response_message}}</p>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <input type="text" v-model="firstname" class="inputText form-control" required />
                  <span class="floating-label" >First Name</span>
                </div>
                <div class="col-md-6 mb-4 mt-2">
                  <input type="text" v-model="lastname" class="inputText form-control" required />
                  <span class="floating-label" >Last Name</span>
                </div>
                 <div class="col-md-12 mb-4">
                  <input type="number" v-model="phone" class="inputText form-control" required />
                  <span class="floating-label" >Phone</span>
                </div>
                <div class="col-md-12">
                    <p class="error">{{emessage}}</p>
                </div>
                 <div class="col-md-12 mb-4">
                  <input type="email" v-model="email" class="inputText form-control" required @blur="checkmail" />
                  <span class="floating-label" >Email</span>
                </div>
                  <div class="col-md-12 mb-4">
                  <input type="password" v-model="password" class="inputText form-control" required />
                  <span class="floating-label" >Password</span>
                </div>
                <div class="col-md-12">
                    <p class="error">{{pmessage}}</p>
                </div>
                <div class="col-md-12 mb-4">
                  <input type="password" v-model="repeat" class="inputText form-control" required @blur="match" />
                  <span class="floating-label" >Repeat password</span>
                </div>
            
                <div class="col-md-12 text-center p-4">
                    <button class="action-button" v-bind:class="{disable:disable}" v-on:click="signup">
                        <span v-if="!loading">LOGIN</span>
                       <div v-else class="spinner-border spinner-border-sm"></div>
                    </button>
                </div>
                <div class="col-md-12 p-3 text-center labels">
                   Have a BikeX account? <router-link to="/login"><span style="color:#f6b949">Log in</span></router-link>
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
            users:[]
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
           if(!this.email_message && !this.password_message){
            this.loading=true
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
            }
           }
        },
        login(){
        this.$router.push({path:'/login'})  
        },
        computed:{
            pmessage(){
                return this.password_message
            },
            emessage(){
                return this.email_message
            },
            disable(){
                if(this.email == ''){
                    return true
                }else{
                    return false
                }
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
</style>