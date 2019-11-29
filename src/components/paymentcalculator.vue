<template>
 <div class="paymentcalculator">

       <div class="row col-12 col-md-12 mt-4 mb-4 paragraph-size">
    <div class="col-md-8 text-left">
      <div class="col-md-12 mt-4 mb-4 padding-none-mobil-view">

        <div class="container text-left p-0 m-0 mt-4 mobil-view">
          <h3 class="why-finance">Why Finance with BikeX ?</h3>
          <ul class="text-left m-0 p-0 decoration-none">
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Apply in minutes</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Seamless process</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Highly competitive rates</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Safe and secure</li>
          </ul>
        </div>


        <p>Calculate your Payment</p>

        <div class="row">
          <div class="col-md-6">
            <input type="range" min="10000" max="20000" v-model="downPayment" class="slider ml-0 pl-0" id="myRange">
            <p>Down Payment: {{downPayment}} <span id="demo"></span></p>
          </div>
          <div class="col-md-6">
            <input type="range" min="12" max="36" v-model="tenure" class="slider ml-0 pl-0" id="myRange">
            <p>Months: {{tenure}} <span id="demo"></span></p>
          </div>
        </div>

        <div class="row mb-0">
          <div class="col-md-6 text-left">
            <p>Interest Rate: {{interest}}%</p>
          </div>
        </div>

        <div class="container text-left p-0 m-0 mt-4 laptop-views">
          <h3 class="why-finance">Why Finance with BikeX ?</h3>
          <ul class="text-left m-0 p-0 decoration-none">
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Apply in minutes</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Seamless process</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Highly competitive rates</li>
            <li class="py-2"><img src="https://assets.vroomcdn.com/static-rebrand/icons/svg/400-gt/check-mark-red.svg" class="sc-cmIlrE cGnyOk"> 
            Safe and secure</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
      <div class="col-md-4 m-0 p-0 mt-4 mb-4">
                  <div class="card m-0 p-0 ml-4 m-0">
                      <div class="heading bikex-header col-md-12 m-0 p-0">
                        <p class="my-2 ml-1">FINANCE WITH BIKEX</p>
                      </div>
                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 mt-2 p-0 text-left">
                            <p class="pl-2">Vehicle Price</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 mt-2 p-0 text-right paragraph-size">
                          <p>Rs. {{price}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Shipping</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{shipping}}</p>
                        </div>
                      </div>
                          <hr>
                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Total Price</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{price + shipping}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Down Payment</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{downPayment}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Amount Financed</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{loanAmount}}</p>
                        </div>
                      </div>

                      <div class="row col-12 m-0 p-0 paragraph-size">
                        <div class="col-md-6 col-6 m-0 p-0 text-left">
                            <p class="pl-2">Emi Estimated</p>
                        </div>
                        <div class="col-md-6 col-6 pr-1 m-0 p-0 text-right paragraph-size">
                          <p>Rs. {{monthlyPayable}}</p>
                        </div>
                      </div>
                      <div class="col-md-12 mb-3">
                        <button class="btn btn-block border highlight" v-on:click="checkout">APPLY NOW</button>
                      </div>
                  </div>
            </div>
     </div>
</template>