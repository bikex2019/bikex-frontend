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
                <a class="story"><router-link to="/login" exact-active-class="active">LOGIN</router-link></a>
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
                <a class="story"><router-link to="/login" exact-active-class="active">LOGIN</router-link></a>
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
        toggle:false
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
      }
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monda|Montserrat&display=swap');

@media only screen and (max-width: 760px) {
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

</style>