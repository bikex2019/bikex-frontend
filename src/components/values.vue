<template>
    <div class="container col-md-12 m-0 p-0 mb-4">
        <div class="row border p-0 pb-0 mb-4 main m-0 p-0 laptop-main">
         <div class="col-md-8 col-12 mt-3 mb-4 p-0 text-left laptop-container">
             <div class="col-md-12 pl-0 ml-0 title pb-2">
                 <h2><strong>BIKE</strong><span style="color:#ffb52f"><strong>X</strong></span><strong> VALUES</strong></h2>
             </div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active head1" id="Finance-tab" data-toggle="tab" href="#Finance" role="tab" aria-controls="Finance" aria-selected="true">Fixed-Price</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link head1" id="Refurbishing-tab" data-toggle="tab" href="#Refurbishing" role="tab" aria-controls="Refurbishing" aria-selected="false">Refurbished</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link head1" id="returns-tab" data-toggle="tab" href="#returns" role="tab" aria-controls="returns" aria-selected="false">Buy-Protect Policy</a>
                </li>
               <li class="nav-item">
                    <a class="nav-link head1" id="returns-tab" data-toggle="tab" href="#warranty" role="tab" aria-controls="returns" aria-selected="false">Warranty</a>
                </li>
            </ul> 
        
<!-- Tab panes -->
<div class="tab-content ml-0 pl-0 col-md-8 mt-4">
    <div class="tab-pane active" id="Finance" role="tabpanel" >
        <h2 class="head2">One price for every segment</h2>
        <p class="trust-content mt-3">
            We have identified a mechanism and built a single price format for each of our segments.
            This enables us to give the same weightage to the bikes belonging to the specific segment.
            It also nulls any further negotiation as the deal is already pretty lucrative and benefiting.
            You definitely cannot say no to a fixed price, one of a kind, refurbished bike. 
        </p>
    </div>
    <div class="tab-pane" id="Refurbishing" role="tabpanel" >
        <h2 class="head2">Refurbished Vehicles</h2>
        <p class="trust-content mt-3">
            All the preloved bikes undergo rigorous diagnostic tests and multiple, multiple, multiple inspections.
            The parts are replaced with brand new original spares. These bikes are test-ridden several times before we list them on our site. We assure you that the vehicles at BikeX are of the highest quality.
            Hence, the bike collection we have on our website is ‘as good as’ new! 
        </p>
    </div>  
    <div class="tab-pane" id="returns" role="tabpanel" ><h2 class="head2 mt-3">3-Day Buy-Protect Policy</h2>
        <p class="trust-content mt-3">
        Every bike comes with a 3-day buy protect policy that includes no-cost replacement/servicing/repairs.
        If anything goes wrong with the mechanism of the bike, the repairs will be on us and the parts will be replaced for free. You won’t need to pay a penny for this. 
        </p> 
    </div>
  <div class="tab-pane" id="warranty" role="tabpanel">
      <h2 class="head2 mt-3">Warranty</h2>
        <p class="trust-content mt-3">
            The bikes, in all our segments, comes with a manufacturer’s warranty and an extended BikeX warranty of 6 months.
            The servicing can either be done at the manufacturer’s servicing centre or in any of our workshops.
            As long as the bike is within the warranty period, the servicing will be on us!
        </p>
    </div>
 </div>
</div>
<div class="col-md-4 col-8 pt-4 mt-2 mr-0 pr-0 imager text-right">
    <img src="../assets/bikex_values_3.png" height="100%">
    </div>
</div> 

<div class="services-area col-md-12 m-0 p-0 mt-4 margin">
                <div class="container m-0 p-0 margin">
                    <div class="row m-0 p-0 margin">
                        <div class="col-lg-3 col-md-6 mb-4 m-0 pr-2 p-0 no-mobile-pad col-12">
                            <div class="single-services orange mb-30 col-12 margin text-center">
                                <div class="services-icon">
                                    <img alt="" src="../assets/support.svg" width="25%">
                                </div>
                                <div class="services-text">
                                    <h5><strong>24/7 Support</strong></h5>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 m-0 p-0 pr-2 no-mobile-pad col-12">
                            <div class="single-services yellow mb-30 col-12 margin text-center">
                                <div class="services-icon">
                                    <img alt="" src="../assets/tracking.png" width="25%">
                                </div>
                                <div class="services-text">
                                    <h5><strong>Door Delivery</strong></h5>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 m-0 p-0 pr-2 no-mobile-pad col-12">
                            <div class="single-services purple mb-30 col-12 margin text-center">
                                <div class="services-icon">
                                    <img alt="" src="../assets/tools.png" width="25%">
                                </div>
                                <div class="services-text">
                                    <h5><strong>Door Servicing</strong></h5>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 m-0 p-0 col-12 no-mobile-pad col-12">
                            <div class="single-services sky mb-30 col-12 margin text-center">
                                <div class="services-icon">
                                    <img alt="" src="../assets/key.png" width="24%">
                                </div>
                                <div class="services-text">
                                   <h5><strong>Assured Buy-Back</strong></h5>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Monda|Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
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
    padding: 0 !important
}
.question-area{
  text-align: center !important
}
.title{
    text-align: center !important
}
.tab-pane{
    padding: 0px 10px 0px 10px;
}
.nav-tabs{
      padding: 0px 0px 0px 10px;
}

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
    font-size: 36px;
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
    font-size: 12px;
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
}
.title h2, .head2{
    font-size:20px;
    font-weight:bold;
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
}
/* just for laptop // just for laptop // just for laptop // just for laptop */


.nav-tabs .nav-item.show .nav-link, .nav-tabs .nav-link.active {
    color: black;
    background-color: #ffb52f;
    border-color: #dee2e6 #dee2e6 #fff;
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
}
.services-icon {
    margin-right: 20px;
}
.services-text > h5 {
    color: #4f4e4e;
    font-size: 15px;
    font-weight: 400;
    margin: 12px 0 15px;
}
.services-text > p {
    margin: 0;
}
.single-services:hover .services-icon img {
    animation: 500ms ease-in-out 0s normal none 1 running zoomIn;
}
</style>