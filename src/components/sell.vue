<template>
  <div class="finance col-12 bg">
        <div class="jumbotron col-10 margin bg-light">
            <h3><strong>Sell or trade in</strong></h3>
            <h3 class="headerfont"><h1 class="text-left">Cash<span> for</span><strong> BI</strong><strong style="color:#ffb52f">KE</strong></h1></h3>
            <p class="mt-5"><strong>Free Pickup. Quick and Easy Process</strong></p>
            <div class="button text-left mb-4 mt-4">
            <button class="viewbikes-button" v-on:click="vehicles"><strong>WHAT'S MY BIKE WORTH ?</strong></button>
            </div>
        </div>    
        <div class="container middle col-md-10 col-12 pl-0 pt-4">
          <div class="row col-12">
            <div class="col-md-4 col-12 margin-bottom">  
                <div class="row col-12">
                            <div class="col-md-1 col-1 m-0 p-0">
                                <i class="fa fa-chevron-circle-right" style="color:#ffb53f" ></i>  
                            </div>
                            <div class="col-md-11 col-11 m-0 p-0 text-left mt-1 ">
                              <h6 class="card-title pb-2 mb-0"><strong>Quick & Easy</strong></h6>
                              <p class="card-text">Provide some basic information about your vehicle and get a guaranteed offer.(details will be added later)</p>
                            </div>  
                  </div>
            </div>
            <div class="col-md-4 col-12 margin-bottom">
               
                <div class="row col-12">
                            <div class="col-md-1 col-1 m-0 p-0">
                              <i class="fa fa-chevron-circle-right" style="color:#ffb53f"></i>     
                            </div>
                            <div class="col-md-11 col-11 m-0 p-0 text-left mt-1 ">
                              <h6 class="card-title pb-2 mb-0"><strong>No Obligation to Sell</strong></h6>
                              <p class="card-text">Our offers are guaranteed for 10 days or 250 additional miles, with no pressure to sell.</p>
                            </div>  
                        </div>
                
             </div>
            
            <div class="col-md-4 col-12 margin-bottom">
              
               <div class="row col-12">
                            <div class="col-md-1 col-1 m-0 p-0">
                            <i class="fa fa-chevron-circle-right" style="color:#ffb53f"></i>     
                            </div>
                            <div class="col-md-11 col-11 m-0 p-0 text-left mt-1 ">
                              <h6 class="card-title pb-2 mb-0"><strong>Free bike Pickup</strong></h6>
                              <p class="card-text">We’ll schedule a time to pick up your car for no charge, anywhere in the lower 48 states.</p>
                            </div>  
                        </div>
                      </div>
                    </div>
                  </div>
  <!-- icons grid -->
     
  <!-- image section -->
    <div class="container midddle p-0 col-md-9 col-12 mt-5">
      <div class="row col-12 pt-4">
          <div class="col-md-6">
             <div class="col-md-12 ml-0 pl-0 text-left">
                <h2 class="ml-0 pl-0 pb-3"><strong>how it works?</strong></h2>
             </div>
              
                   <div class="row pb-3 col-12">
                      <div class="col-md-1 col-1 m-0 p-0">
                        <i class="fa fa-arrow-circle-right mt-1" style="color:#ffb53f"></i>
                      
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">It all begins with a form</p>
                        <p class="mb-0 p-0 ptag">We need a few details about you and the bike you are selling.. It’s more like a laundry list so just tap away!</p>
                      </div>
                    </div>  

                    <div class="row pb-3 col-12">
                      <div class="col-md-1 col-1 m-0 p-0">
                        <i class="fa fa-arrow-circle-right mt-1" style="color:#ffb53f"></i>
                      
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">Haggling is an art! </p>
                        <p class="m-0 p-0 ptag">We don’t negotiate much but we do stick to our guns. Our haggling sense is good and we always make it worth it. We are fair and make sure we shell out what it’s worth.</p>
                      </div>
                    </div>  

                    <div class="row pb-3 col-12">
                      <div class="col-md-1 col-1 m-0 p-0">
                      <i class="fa fa-arrow-circle-right mt-1" style="color:#ffb53f"></i>
                      
                      </div> 
                      <div class="col-md-11 col-11 m-0 p-0 text-left">
                        <p class="m-0 p-0 cool">When all is said and done</p>
                        <p class="m-0 p-0 ptag">Once we come to a decision on the price, we will get the paperwork done. The payment will be made online via a direct money transfer. The bike is now ours! </p>
                      </div>
                    </div>   
               
          </div>
        <div class="col-md-6 text-right">
        
    <div class="row justify-content-center">
      <div class="col-md-10 mb-3 ml-3">
        <h2 class="text-center"><strong>contact us?</strong></h2>
        
        <h5 class="text-center text-success"></h5>
        <form action="" method="post" id="form-box" class="p-2">
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-bars"></i></span>
            </div>
            <input type="text" name="name" class="form-control" placeholder="Enter your name" required>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-envelope-o"></i></span>
            </div>
            <input type="email" name="email" class="form-control" placeholder="Enter your email" required>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-phone"></i></span>
            </div>
            <input type="text" name="subject" class="form-control" placeholder="Enter phone no" required>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text"><i class="fas fa-comment-alt"></i></span>
            </div>
            <textarea name="msg" id="msg" class="form-control" placeholder="Drop your query here . . ." cols="30" rows="4" required></textarea>
          </div>
          <div class="form-group">
            <input type="submit" name="submit" id="submit" class="btn btn-block background" value="Send">
          </div>
        </form>
      
    </div>
  </div>

        </div>
     
    </div>
    </div>
   <hr>
   <!--image section -->

   <!-- question -->
    <div class="col-md-12 middle col-12">
     
      <div class="col-md-12 text-center">
        <p class="font hit">questions ?</p>
      </div>

      <div class="container col-md-10 col-12 middle">
         <div class="row col-md-12 col-12 mb-4">

            <div class="col-md-4 col-12 text-center border-right no-border">
                  <p class=""><i style="color:#ffb52f" class="fa fa-home pr-2 pt-1"></i>visit our center</p>
            </div>

             <div class="col-md-4 col-12  text-center border-right no-border">
              
                   
             
                 <p class=""><i style="color:#ffb52f" class="fa fa-lg fa-phone pr-2 pt-1"></i> 07989 936719</p>
            
            </div>

             <div class="col-md-4 col-12 text-center">
          
                  
                  <p class=""><i style="color:#ffb52f" class="fa fa-address-book pr-2 pt-1"></i>Message</p>
              
            
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
    }
  },
    mounted () {
  
  },
  beforeDestroy () {
  },
  computed:{
     
  }
}
</script>


<style scoped>
.input-group-text{
  color:#ffb52f;
}
.color{
  color:#ffb53f;
}
.background{
  background-color:#ffb52f;
}
.viewbikes-button{
    text-transform: uppercase;
    opacity: 0.9;
    background-color:	 #ffb52f;
    box-shadow: none;
    color: BLACK;
    padding: 8px 10px;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    border:none;
    font-size:14px;
}
.viewbikes-button:hover{
  opacity: 1;
    background-color:	 #ffb52f;
    border-color: #ffb52f;
}
.margin{
    margin:0 auto;
}


@import url('https://fonts.googleapis.com/css?family=Monda|Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css?family=Coda|Coda+Caption:800&display=swap');

@media only screen and (max-width: 600px) {
          .container .row{
          margin:0;
          padding:0
          }
          .no-border{
            border: none !important
          }
          .keep-text-center{
            text-align: center !important
          }
          .no-margin{
            padding:0
          }
          .fa{
            margin-left:0px !important;
            font-size: 16px;
          }
          .ptag{
            font-size:10px;
          }
          .size p{
            font-size:10px;
            padding-top:4px;
            font-family: 'Montserrat', sans-serif;
            font-weight: bold;
          }
          .middle{
          margin:0 auto;
          }
           text-center{
            margin:0;
            padding:0
          }
          .margin-bottom{
            margin-bottom: 15px;
          }
      }


.hit{
  font-family: 'Monda', sans-serif;
font-weight: bold;
font-size:30px;
margin-left: 5px;
}
.py-1{
    font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;

}
.ptag{
  font-size:16px;
}
.middle{
  margin: 0 auto;
}
.features-icons {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.features-icons .features-icons-item {
  max-width: 20rem;
}

.features-icons .features-icons-item .features-icons-icon {
  height: 7rem;
}

.features-icons .features-icons-item .features-icons-icon i {
  font-size: 4.5rem;
}

.features-icons .features-icons-item:hover .features-icons-icon i {
  font-size: 5rem;
}
 .text{
   text-align: left;
   font-size: 14px;
 }
    .text1{
   text-align: left;
 }

img {
    vertical-align: middle;
      border-style: none;
}
.li{
  list-style: none;
}
ul{
  list-style: none;
}
.card-text{
  font-size: 15px;
  font-weight:400;
}
.cool{
  font-weight:500;
  font-size: 20px;
  font-family: "Akzidenz Grotesk BQ Light", Helvetica, Arial;
}

.hey{
  background: linear-gradient(-85deg, rgb(255, 255, 255) 37%, rgb(245, 245, 245) 37%);
    background-image: linear-gradient(-85deg, rgb(255, 255, 255) 37%, rgb(245, 245, 245) 37%);
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
  
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
}
.headerfont{
  font-size:100px
}
.jumbotron{
  background-image: url('../assets/sell_banner2.jpg');
  background-repeat: no-repeat;
  background-position: cover;
  background-size: 100%;
}
.input-group>.form-control:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: none;
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
