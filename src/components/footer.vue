<template>
<footer class="footer-classic col-md-12" style="background: #f5f5f0;">
        <div class="container col-md-10 margin">
          <div class="row custom">
            <div class="col-md-3 col-6 text-left contentss ok">
              <h3 class="menu">COMPANY</h3>
              <ul class="nav-list">
                <li><router-link to="/ourstory">Our Story</router-link></li>
                        
                <li><router-link to="/faq">FAQ</router-link></li>            
              </ul>
            </div>

            <div class=" policy col-md-3 col-6 text-left contentss ok">
              <h3 class="menu">POLICIES</h3>
              <ul class="nav-list">
                
                <li><router-link to="/termsandcondition">Terms & Conditions</router-link></li>
                <li><router-link to="/privacypolicy">Privacy Policy</router-link></li>            
                <li><router-link to="/disclaimerpolicy">Disclaimer policy</router-link></li> 
                <li><router-link to="/copyright">Copyright Guidelines</router-link></li>            
              </ul>
            </div>

            <div class=" contact col-md-3 col-6 text-left contentss ok">
             <h3 class="menu">CONTACT</h3> 
              <ul class="nav-list">
                <li><span>Email: </span><a href="mailto:info@bikex.in">info@bikex.in</a></li>            
                <li><span>Phones: </span><a class="phone" href="tel: +91 9742744444">+91 9742744444</a></li> 
                <li><span>Address: </span>
                <a class="map-responsive" href="https://goo.gl/maps/eJKcARiWnqRXDc5u5" target="_blank">Site No: 19, Bytarayanapura-560092 </a>
                </li>           
              </ul>
            </div>

            <div class="col-md-3 text-left col-6 ok mt-0">
              <a href="" class="navbar-brand" routerLink="/"><img class="logolight" src="../assets/bikexlight2.svg" width="90px" height="59px"></a>
              <div class="social">
                <p class="social"><a href="https://www.facebook.com/ontrack" target="_blank"><i class="fb fa fa-facebook fa-2x"></i> </a>
                <a href="https://www.instagram.com/ontrack" target="_blank"> <i class="insta fa fa-instagram fa-2x"></i></a>
                <a href="https://www.twitter.com/ontrack" target="_blank">  <i class="tweet fa fa-twitter fa-2x"></i></a></p>
               </div>  

               <!-- <div class="batch">
                  <p class="rights"><span>©  </span><span class="copyright-year">2019</span>
                  <span> BikeX</span><span>. </span><span>All Rights Reserved.</span></p>
                </div> -->
            </div>

            
            
          </div>
        </div>
      </footer>
</template>


<script>
export default {


}
</script>

<style scoped>

.footer{
  min-height: 250px;
  /* padding: 1; */
}
.margin{
    margin: 0 auto
}
.red{
  color: #EA2027
}
span{
    color: #a7a7a7;
font-size: 15px;
  font-weight: 400;

}
.navbar-brand{
      margin-bottom: .5rem;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0px;
}
.custom{
    padding: 60px 0px 60px 0px;
}

h3.menu {
    padding-top: 0.515rem;
}

.menu{
font-size: 18px;
font-weight: bold;
color:#e4e4e4;
}
.sub-menu p{
  font-size: 5px;
}
.social a{
  padding-right: 10px;
  font-size: 10px;
}
.fb:hover{
color: #3B5998
} 
.insta:hover{
    background: -webkit-radial-gradient(33% 100% circle, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF);
    background: radial-gradient(circle at 33% 100%, #FED373 4%, #F15245 30%, #D92E7F 62%, #9B36B7 85%, #515ECF);
    -webkit-text-fill-color: transparent;
}
.tweet:hover{
color: #1da1f2
}

.contentss ul{
  line-height: 30px;
  list-style: none;
  padding: 0px;
  margin: 0px;

}
li{
  font-size: 15px;
  font-weight: 300;
}
.desktopmap{
  padding-top: 0px;
}
.map{
padding-top: 13px;
}
.context-dark, .bg-black-dark .bg-primary{
    color: rgba(255, 255, 255, 0.8);
}

ul li a:hover {
    color: #ffb52f;
}
.batch p{
  font-size: 9px;
  
}
.footer-classic{
    background-color: #001232 !important
}
.footer-classic a, .footer-classic a:focus, .footer-classic a:active {
    color:#919191;
}

@media only screen and (max-width: 700px) {
.contentss{
text-align: left !important
}
}

</style>