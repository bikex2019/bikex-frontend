<template>
  
     <div class="navigation p-0 m-0">
          <nav class="navbar p-0 m-0 mt-2 mynav">
      <div class="row col-md-10 margin">
        <div class="col-md-2 col-12 m-0 pt-2 pl-0 pr-0 logo">
            <router-link to="/">
              <img src="../assets/bikex-logo.svg" width="130px">
              <span style="color:black;font-size:10px;text-decoration:none"><STRONG>BLR</STRONG></span>
            </router-link>
              <a v-if="navigation" v-on:click="navigation = false">
                 <i class="mt-2 mr-2 pull-right">
                   <img src="../assets/cross.svg" width="22px">
                 </i>
                 
                 </a>
              <i v-else class=" pull-right mt-2 mr-2 p-0 mobile" v-on:click="navigation = true">
                <img src="../assets/menu-bikex.svg" width="25px">
              </i>
        </div>
        <div class="navmenu col-md-10 col-12 text-right phone">
        <ul class=" ml-0 pl-0 pt-2" v-bind:class="{ block: navigation }">
            <li class="nav-item" >
                <a class="story" v-on:click="navigation = false"><router-link to="/commuters" exact-active-class="active">BUY</router-link></a>
            </li>
             <li class="nav-item">
            <a class="models" v-on:click="navigation = false"><router-link to="/sell" exact-active-class="active">SELL</router-link></a>
            </li>
            <li class="nav-item">
            <a class="models" v-on:click="navigation = false"><router-link to="/finance" exact-active-class="active">FINANCE</router-link></a>
            </li>
              <li class="nav-item" v-on:click="navigation = false">
            <a class="models"><router-link to="/ourstory" exact-active-class="active">OUR STORY</router-link></a>
            </li>
            <!-- <li class="nav-item">
           <a href="tel:+91 9742744444"><h6><i class="fa fa-phone mr-1" aria-hidden="true" style="color:#FFB52F"></i>+91 9742744444</h6> </a>
            </li> -->
                <li class="nav-item"  v-if="!isLogged" v-on:click="navigation = false">
                <a class="story" data-toggle="modal" data-target="#exampleModal">
                  <!-- <router-link to="/login" exact-active-class="active">LOGIN</router-link> -->
                  LOGIN
                  </a>
            </li>
             <li class="nav-item dropdown m-0" v-else>
                <a class="nav-link dropdown-toggle m-0 p-0" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {{user}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <router-link to="/profile"><a class="dropdown-item">PROFILE</a></router-link>
                  <a class="dropdown-item" v-on:click="logout">SIGN OUT</a>
                </div>
              </li>      
        </ul>
          
        </div>
   
      </div>
  </nav>

   <nav class="navbar navbar-fix p-0 m-0 fixed-top navigate"  v-if="shownav" v-bind:class="{none:$route.path=='/vehicle/:id'}">
      <div class="row col-md-10 margin">
        <div class="col-md-2 col-12 m-0 pt-2 pl-2 pr-0 logo">
            <router-link to="/">
              <img src="../assets/bikex_temp_logo.svg" width="130px">
            </router-link>
               <a v-if="navigation" v-on:click="navigation = false">
                 <i class="mt-2 mr-2 pull-right">
                   <img src="../assets/cross.svg" width="22px">
                 </i>
                 
                 </a>
              <i v-else class=" pull-right mt-2 mr-2 p-0 mobile" v-on:click="navigation = true">
                <img src="../assets/menu-bikex.svg" width="25px">
              </i>
        </div>
        <div class="navmenu col-md-10 col-12 text-right phone">
        <ul class=" ml-0 pl-0 pt-3" v-bind:class="{ block: navigation }">
               <li class="nav-item" v-on:click="navigation = false">
                <a class="story"><router-link to="/commuters" exact-active-class="active">BUY</router-link></a>
            </li>
             <li class="nav-item" v-on:click="navigation = false">
            <a class="models"><router-link to="/sell" exact-active-class="active" >SELL</router-link></a>
            </li>
            <li class="nav-item" v-on:click="navigation = false">
            <a class="models"><router-link to="/finance" exact-active-class="active">FINANCE</router-link></a>
            </li>
              <li class="nav-item" v-on:click="navigation = false">
            <a class="models"><router-link to="/ourstory" exact-active-class="active" >OUR STORY</router-link></a>
            </li>
            <!-- <li class="nav-item">
           <a href="tel:+91 9742744444"><h6><i class="fa fa-phone mr-1" aria-hidden="true" style="color:#FFB52F"></i>+91 9742744444</h6> </a>
            </li> -->
            <li class="nav-item"  v-if="!isLogged" @button-clicked="update" v-on:click="navigation = false">
                <a class="story" data-toggle="modal" data-target="#exampleModal">
                  <!-- <router-link to="/login" exact-active-class="active">LOGIN</router-link> -->
                  LOGIN
                  </a>
            </li>
             <li class="nav-item dropdown" v-else>
                <a class="nav-link dropdown-toggle m-0 p-0" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-on:click="toggle =! toggle">
                  {{user}}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" v-if="toggle">
                  <a class="dropdown-item"  v-on:click="navigation = false"><router-link to="/profile">PROFILE</router-link></a>
                  <a class="dropdown-item" v-on:click="logout">SIGN OUT</a>
                </div>
              </li>
        </ul>
        </div>
   
      </div>
  </nav>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content m-0 p-0">
      <div class="modal-header m-0 p-0">
        <div class="back mt-5 ml-3 pt-5">
          <h2 class="modal-title m-0 p-0" id="exampleModalLabel">LOGIN</h2>
        </div>
         <!-- <img src="../assets/LOGIN.svg" width="130px" class="mt-5"> -->
        <button type="button" class="close pr-4 pt-4" data-dismiss="modal" aria-label="Close">
          <img src="../assets/close-button.svg" width="22px">
        </button>
      </div>
      <div class="modal-body">
       <div class="row text-center col-md-11" style="margin:0 auto">
                    <div class="col-md-3 col-3 mt-4 text-center">
                      <label class="labels" for="">Email</label>
                    </div>
                    <div class="col-md-9 col-9 mb-4 mt-3 text-center">
                    <input type="text" v-model="email" class="inputText form-control" required/>
                    <span class="floating-label" >Enter email</span>
                    </div>
                    <div class="col-md-3 col-3 mt-4 text-center">
                      <label for="" class="labels">Password</label>
                    </div>
                    <div class="col-md-9 col-9 mb-4 mt-3 text-center">
                    <input type="password" v-model="password" class="inputText form-control" required />
                    <span class="floating-label" >Enter password</span>
                    
                    <div class="col-md-12 mb-2 pt-4 mt-3 text-left m-0 p-0">
                    <button class="action-button" v-on:click="log_me">
                      <span v-if="!loading">LOGIN</span>
                       <div v-else class="spinner-border spinner-border-sm"></div>
                      </button>
                    </div>
                    </div>
                    <div class="col-md-12 m-0 p-0 text-center" v-if="response_message">
                        <p class="error">{{response_message}}</p>
                    </div>
                    <div class="col-md-12 mb-4 pt-4">
                        <p class="labels">Don't have Account? <router-link to="/signup" data-dismiss="modal" style="color:#f6b949">Sign up.</router-link></p>
                    </div>
                 </div>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-primary">LOGIN</button>
      </div> -->
    </div>
  </div>
</div>
 </div>
</template>
<script>

export default {
    components:{
      
    },
    data(){
      return{
        navigation:false,
        shownav:false,
        isLogged:false,
        user:'',
        toggle:false,
        email:'',
        password:'',
        response_message:'',
        loading:false
      }
    },
  created () {
      this.user = localStorage.getItem('token')
        if(this.user){
            this.isLogged = true
        }
    window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        this.shownav = window.scrollY > 460
      },
      logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('temp')
        window.location.reload()
        this.navigation = false
      },
      update(){
        this.isLogged = false
      },
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
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monda|Montserrat&display=swap');

@media only screen and (max-width: 760px) {
  /* .modal-dialog {
    position: relative;
    width: auto;
    margin: 2.5rem !important;
    pointer-events: none;
  } */
  .mobile{
    display: block !important;
  } 
  .navmenu ul{
    display: none;
  }
  .margin{
    margin: 1px!important;
    padding: 0 !important
  }
  .navmenu .dropdown-menu{
    text-align: center;
    width: 100%;
    position: relative;
    margin-top: 12px !important;
    border: none !important;
    font-size: 12px;
  }
  .mynav{
    border-bottom: 1px solid rgb(133, 127, 127,0.07);
    margin: 0px 0px 5px 0px !important;
    padding-bottom: 5px !important;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
  }
  .active{
  border-bottom: none !important;
  padding-bottom: 5px
  }
  .block{
    display: none !important
  }
  .navbar ul li{
     display: block !important;
     text-align: center;
     padding: 10px;
     font-weight: bold;
  }
  .logo{
    background: #ffffff;
    padding-left: 0px !important;
  }
  .phone{
  padding-right: 0 !important;
  margin-right: 0 !important;
  }
  .navigate{
    display: none
  }
}
.close img{
  color: white
}
.back{
    /* border: 1px solid white; */
    padding: 2px;
     position:relative;
    bottom:0;
    right:0;
  }
  .modal-title{
    color: #fefefe;
    font-size: 30px;
    font-weight: 700
  }
 .error{
   color: rgb(128, 4, 4);
    font-size: 13px;
    font-weight: 700
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
.modal-content{
  border:2px solid #FFB52F;
  border-radius: 12px;
  overflow: hidden;
}
.modal-header{
  min-height: 150px;
  background-color: rgb(0, 18, 51);
  background-image: url("../assets/heroes.png");
  background-size: cover;
  overflow: hidden

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
    opacity: 0.7;
    position: absolute;
    pointer-events: none;
    left: 30px;
    top: 8px;
    transition: 0.2s ease all;
}
 .labels{
    font-size: 13px;
    font-weight: 500;
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
.dropdown-toggle{
  text-transform: uppercase
}

.dropdown:hover>.dropdown-menu {
  display: block;
}
.nav-item h6{
  font-weight: bold;
  color: #001232;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
}
.none{
  display: none;
}
.margin{
  margin: 0 auto
}
.block{
  display: block !important
}
 .mobile{
    display: none;
    cursor: pointer;
  }
.card{
    transform: skewX(-10deg)
    
}
.navmenu ul li{
    display: inline-block;
    text-decoration: none;
    background-color: transparent;
    /* font-family: 'Montserrat', sans-serif; */
    font-size: 12px;
    padding-right: 30px;
    font-weight: bold
}
.navmenu .dropdown-menu{
    font-size: 12px;
    font-weight: bold
}

.navmenu ul li a{
    color: black;
    letter-spacing: 1px;
    text-decoration: none;
    cursor: pointer;
}
.navigate{
    /* box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 4px 0px; */
    border-bottom: 1px solid rgb(133, 127, 127,0.07);
    margin: 0px;
    padding: 0px;
    transition: all 250ms ease-in-out 0s;

}
    @keyframes fade-in{
    0%{
      opacity: 0
    }
      100%{
      opacity: 1
    }}
.navbar{
    background: white;
}
.navbar-fix{
    animation:slide-down 0.7s;
}
@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    } 
    100% {
        opacity: 0.9;
        transform: translateY(0);
    } 
}

.active{
  border-bottom: 2px solid #FFB52F;
  padding-bottom: 5px
}

.nav-item:after {
  display:block;
  content: '';
  padding-bottom: 4px;
  border-bottom: solid 2px #FFB52F;  
  transform: scaleX(0);  
  transition: transform 100ms ease-in-out;
}
.nav-item:hover:after { transform: scaleX(1); }
.nav-item.fromRight:after{ transform-origin:100% 50%; }
.nav-item.fromLeft:after{  transform-origin:  0% 50%; }
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