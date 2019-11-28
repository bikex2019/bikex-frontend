<template>

<div class="bikes">              
        <div class="container col-md-12">  
           <div class="col-12 bread col-md-12">
               <div class="row">
                <div class="col-12 col-md-10 mt-4 p-0" style="margin:0 auto">
                     <ol class="breadcrumb pull-left">
                    <li class="breadcrumb-item"><router-link to="/commuters" exact-active-class="active">COMMUTER</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/traveller" class="left" exact-active-class="active">TRAVELLER</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/adventurer" class="left" exact-active-class="active">ADVENTURER</router-link></li>

                    </ol>

                </div>
               </div>
           </div>
             <div class="product-area mb-4 p-0">
                <div class="container col-12">
                    <div class="section-title text-center mb-50">
                        <h2>CHOOSE YOUR BIKE</h2>
                        <p><span>Bikex,</span> the most latgest bike store in Bengaluru can serve you latest quality of reborn motorcycle in fixed price.</p>
                    </div>
                    <div class="product-tab-list text-center col-12 nav product-menu-mrg" role="tablist">
                        <a class="active"  data-toggle="tab" >
                            <h4>ALL</h4>
                        </a>
                        <a data-toggle="tab">
                            <h4>STANDARD</h4>
                        </a>
                        <a data-toggle="tab">
                            <h4>PREMIUM</h4>
                        </a>
                    </div>
                </div>
             </div>
        </div>
        <div>
        </div>
    <div class="col-md-10 py-2" style="margin:0 auto">
         <div class="row pl-2 pr-2" >
                <div class="col-4 col-md-4 col-lg-3 pt-2 pr-1 pl-1" v-for="(image, index) in travellers" :key="index">  
                    <div class="moterbike"> 
                        <div class="card"> 
                            <div class="image text-center">
                                <img v-if="image.url" :src="[image.url]" width="100%" height="55%">
                                <img v-else :src="'http://localhost:3000/myImages/bikex-Display-Images/'+image.images" width="100%" height="30%">
                            </div>
                            <div class="card-body text-center mt-4">
                                <p v-if="image.type == 'premium'"><span class="label label-default">Premium</span></p>
                                <p v-if="image.type == 'standard'"><span class="label label-default">Standard</span></p>
                                <p class="bike-name pb-2">Rs. {{image.selling_price}}</p>
                                <p>{{image.engine_cc}} CC</p>
                            </div>
                            
                        </div> 
                    </div>                   
        </div>    
                
            </div>          
    </div>
        <div class="loading text-center mb-4" style="min-height:200px" v-if="!loading && datas.length == 0">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> 
    <div class="loading text-center mb-4" style="min-height:200px" v-if="loading">
              <div class="spinner-border" role="status">
    <span class="sr-only">Loading...</span>
        </div>
    </div>
</div>
</template>
<script>
export default {
     data(){
        return{
                    vehicles:[],
                    models:[],
                    displayImage:[],
                    mega:[],
                    loading:false
        }
    },
    mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
    },
    beforeMount(){
        this.loading = true
	this.$http.get('http://localhost:3000/api/fetch/live-vehicle')
      .then(response=>{this.vehicles= response.body;
      });this.$http.get('http://localhost:3000/api/models')
      .then(res=>{this.models= res.body;});
      this.$http.get('http://localhost:3000/api/upload-display')
      .then(resp=>{this.displayImage= resp.body.data;window.console.log(this.displayImage); this.loading = false});
    },
    computed:{
        datas(){
        const temp = []
        this.vehicles.forEach(x => {
            this.models.forEach(y => {
            if (x.model_id === y._id) {
                temp.push({ ...x, ...y })
            }
            })
        })
      return temp
    },
    megaData(){
        const temp2 = []
        this.datas.forEach(x => {
            this.displayImage.forEach(y => {
            if (x.vehicle_id === y.vehicle_id) {
                temp2.push({ ...x, ...y })
            }
            })
        })
      return temp2
    },
    travellers(){
     const temp3 = []
            this.megaData.forEach(y => {
            if (y.vehicle_type === 'bikes') {
                temp3.push({ ...y })
            }
        })
      return temp3
    }
    }
}
</script>
<style scoped>
@media only screen and (max-width: 600px) {
    .breadcrumb{  
        float: none;
        justify-content: center
    }
    .breadcrumb ol{
         text-align: center !important;
    }
    .product-tab-list a h4 {
    padding: 5px !important;
    font-size: 12px !important;
    }
    .section-title p{
        font-size: 10px;
    }
     .section-title h2{
        font-size: 15px;
    }

}
.top{
    margin-top: 80px;
}

.breadcrumb{
background-color: transparent;
padding:0 !important;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
}
.bread li{
    text-decoration: none;
    list-style: none
}
.breadcrumb li a{
        font-size: 11px;
        color: black;
}
.active{
     color: #ffb52f !important;
}
.breadcrumb li a:hover{
        color: #ffb52f;
        text-decoration: none;
}
.breadcrumb-item+.breadcrumb-item::before {
    font-size: 7px;
    padding:2px;
}
.breadcrumb-item.active {
    padding-left: 1px;
}
.breadcrumb-item.notactive a{
    padding-left: 1px;
     color: black
}
.product-tab-list{
    cursor: pointer;
    display: flex;
    justify-content: center;
    transform: skewX(-10deg);
    text-decoration: none

}
.product-tab-list a h4 {
    color: #001232;
    font-size: 18px;
    font-weight: bold;
    margin: 0 10px;
    padding: 11px 26px 12px;
    box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.15);
 
}
.breadcrumb .left{
    padding-left: 10px !important;
}
.product-tab-list a.active h4 {
    color: #001232;
    background-color: #ffb52f;
}
.product-tab-list1 {
    display: flex;
    justify-content: center;
     transform: skewX(-14deg); 
}
.image img{
    cursor: pointer;
  transition: all 0.4s ease;
}
.card-body{
    padding: 6px;
    cursor: pointer;
}
.card-body p{
      font-size: 13px;
      margin-top: 0px;
      font-family: 'Montserrat', sans-serif;
      line-height: 3PX;
      padding:0px;
      cursor: pointer;
}


</style>