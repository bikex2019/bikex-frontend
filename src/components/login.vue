<template>
    <div class="login col-md-8 center border mb-4 mt-4 p-4">
        <div class="row mt-4 mb-4">
            <div class="col-md-6 mobile mt-4">
                <img src="../assets/login.jpg" width="100%">
            </div>
            <div class="col-md-6 m-0 p-0 pl-4">
                <h2>Log In!</h2>
                <div class="row">
                    <div class="col-md-12 mt-4 m-0 p-0" v-if="response_message">
                        <p class="error m-0 p-0">{{response_message}}</p>
                    </div>
                 <div class="col-md-12 mb-4 mt-4 text-center">
                  <input type="email" v-model="email" class="inputText form-control" required/>
                  <span class="floating-label" >Email</span>
                </div>
                  <div class="col-md-12 mb-4">
                  <input type="password" v-model="password" class="inputText form-control" required />
                  <span class="floating-label" >Password</span>
                </div>
                <div class="col-md-12 mb-4 pt-4 justify-content-center">
                   <button class="action-button" v-on:click="log_me">LOGIN</button>
                </div>
                <div class="col-md-12 mb-4 pt-4">
                    <p>Need Account? <router-link to="/signup">sign up.</router-link></p>
                </div>
            </div>
                </div>
        </div>
        <div id="overlay" class="loading text-center mb-4" style="min-height:200px" v-if="loading">
            <div id="text" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            email:'',
            password:'',
            response_message:'',
            data:[],
            loading:false
        }
    },
    created(){
        let auth = localStorage.getItem('token')
        if(auth){
            this.$swal({
                position: 'top-end',
                icon: 'error',
                title: 'Already Signed in as ' + auth,
                showConfirmButton: false,
                timer: 2500
                })
            this.$router.push('/profile')
        }
    },
    methods:{
        log_me(){
            if(this.email){
            this.loading = true
            this.$http.post('https://backend-bikex.herokuapp.com/api/customers/validate',{
              email:this.email,
              password:this.password,
            }).
            then(response=>{
            this.data = response.body;
            if(this.data.err == 0){
                this.response_message = this.data.msg
                localStorage.setItem('token', this.data.data[0].firstname)
                localStorage.setItem('temp', this.data.data[0]._id)
                this.$router.push('/profile')
                window.location.reload()
            }else{
                this.response_message = this.data.msg 
            }
            this.loading = false
            }).catch(error => { 
                this.response_message = error.body.msg
                this.loading = false
            }) 
    } else{
        this.response_message = 'Please provide your E-mail'
    }
            }
        },
}
</script>

<style  scoped>
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
  .inputText{
      width: 80% !important
  }
  .login{
      text-align: center !important
  }
}

.inputText {
outline: none !important;
border: none;
border-bottom: 1px solid gray;
border-radius: 0px;
width: 50%
}
.inputText:focus{
    border-bottom: 1px solid #ffb52f;
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
    width: 60%;
}
.action-button:hover{
        background-color:  #ffb52f;
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
</style>