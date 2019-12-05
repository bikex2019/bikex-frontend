<template>
<div class="container mt-4 mb-4">
    <div class="card border p-4">
        <p v-if="loading">Fetching datas for you..</p>
        <p class="name">Invoice for: <strong>{{invoice.firstname}}</strong></p>
    <div class="row">
        <div class="col-md-6 col-12">
            <p>Order Id : <strong>{{invoice._id}}</strong></p>
        </div>
         <div class="col-md-6 col-12">
            <p>Payment Id: <strong>{{invoice.razorpay_payment_id}}</strong></p>
        </div>
        <div class="col-md-6 col-12">
            <p>Phone: <strong>{{invoice.phone}}</strong></p>
        </div>
        <div class="col-md-6 col-12">
            <p>Email: <strong>{{invoice.email}}</strong></p>
        </div>
    </div>
    <div class="jumbotron m-0 mt-4 p-2 text-center">
        <p>For any assistance please contact our customer support.</p>
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
.invoice{
    margin-top: 60px;
}
.name{
    text-transform: uppercase
}
</style>