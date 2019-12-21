<template>
<div class="container col-md-6 mt-4 mb-4">
    <div class="card border p-0 M-0">
    <div class="modal-header m-0 p-0">
        <div class="back mt-5 ml-3 pt-5">
          <h2 class="modal-title m-0 p-0" id="exampleModalLabel">ORDER HISTORY</h2>
        </div>
      </div>

        <div class="container mt-3 mb-3">
                    <p v-if="loading">Fetching datas for you..</p>
    <p class="name mt-4 mb-4">Dear<strong> {{invoice.firstname}},</strong></p>
    <p>We're glad you've placed your trust in BikeX and have choosen our bike as your travel partner.</p>
    <hr>
    <div class="row">
        <div class="col-md-6 col-12 mt-4 mb-4">
            <p>Order ID:<strong> {{invoice._id}}</strong></p>
        </div>
         <div class="col-md-6 col-12 mt-4 mb-4">
            <p v-if="invoice.razorpay_payment_id">Payment ID:<strong> {{invoice.razorpay_payment_id}}</strong></p>
            <p v-else>Payment ID:<strong> Cash on Delivery</strong></p>
        </div>
        <div class="col-md-6 col-12 mt-4 mb-4">
            <p>Phone: <strong>{{invoice.phone}}</strong></p>
        </div>
        <div class="col-md-6 col-12 mt-4 mt-4 mb-4">
            <p>Email: <strong>{{invoice.email}}</strong></p>
        </div>
         <div class="col-md-6 col-12 mt-4 mt-4 mb-4">
            <p>Vehicle ID: <strong>BX{{invoice.vehicle_id}}</strong></p>
        </div>
         <div class="col-md-6 col-12 mt-4 mt-4 mb-4">
            <p>Total Amount: <strong>Rs.{{invoice.amount}}</strong></p>
        </div>
    </div>
              <!-- <p>Thank you for choosing BikeX</p> -->

    <div class="jumbotron m-0 mt-4 p-2 text-center">
        <p>For any assistance please contact our customer support @<a style="color:#f6b949" href="tel: +91 9742744444">+91 9742744444</a>.</p>
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
            invoice:[]
       }
    },
     created(){
        window.scrollTo({
                top: 0,
                left: 0,
            })
        this.id = this.$route.params.id
           this.$http.get('https://backend-bikex.herokuapp.com/api/purchases/'+ this.id)
          .then(res=>{
          this.invoice = res.body
          window.console.log(this.invoice)
          this.loading = false
          this.rto = 900
          this.insurance = 900
          })
    },
}
</script>
<style scoped>
.modal-header{
  min-height: 150px;
  background-color: rgb(0, 18, 51);
  background-image: url("../assets/INVOICE.png");
  background-size: cover;
  overflow: hidden

}
 .modal-title{
    color: #fefefe;
    font-size: 30px;
    font-weight: 700
  }
.invoice{
    margin-top: 60px;
}
.name{
    text-transform: uppercase
}
</style>