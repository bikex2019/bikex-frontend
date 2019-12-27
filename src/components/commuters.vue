<template>

<div class="bikes">              
        <div class="container col-md-12">  
           <div class="col-12 bread col-md-12">
               <div class="row">
                <div class="col-12 col-md-10 mt-4 p-0" style="margin:0 auto">
                     <ol class="breadcrumb pull-left">
                    <li class="breadcrumb-item"><router-link to="/scooter" exact-active-class="active">SCOOTERS</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/commuter" class="left" exact-active-class="active">COMMUTERS</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/adventurer" class="left" exact-active-class="active">ADVENTURERS</router-link></li>

                    </ol>

                </div>
               </div>
           </div>
             <div class="product-area mb-4 mt-3 p-0 col-md-10" style="margin:0 auto">
                <div class="container col-12 m-0 p-0">
                    <div class="section-title jumbotron m-0 mb-4 p-0 py-2 pb-2 text-center mb-50">
                           <p class="p-1 m-0" v-if="filter=='all' ">
                      <strong>For your day to day travel. Now make it effortless and hassle-free.</strong>
                        </p>
                         <p class="p-1 m-0" v-if="filter=='premium'">
                     <strong>Less driven, comes with manufacture warranty and fairly new.</strong>
                        </p>
                         <p class="p-1 m-0" v-if="filter=='standard'">
                      <strong>Affordable, vehicles comes with BikeX warranty and completely refurbished.</strong>
                        </p>
                    </div>
                    <div class="product-tab-list text-center col-12 nav product-menu-mrg" role="tablist">
                        <a class="active"  data-toggle="tab" v-on:click="filterkey('all')">
                            <h4>ALL</h4>
                        </a>
                        <a data-toggle="tab" v-on:click="filterkey('premium')">
                        <h4>
                            <img src="../assets/premium.svg" class="premium_img">
                            PREMIUM
                        </h4>
                        </a>
                        <a data-toggle="tab" v-on:click="filterkey('standard')">
                            <h4>STANDARD</h4>
                        </a>
                    </div>
                </div>
             </div>
        </div>
        <div>
        </div>
        <div class="col-md-10 py-2 mb-4" style="margin:0 auto">
            <div class="container m-0 p-0 mb-3">
                <p class="m-0 p-0 color" v-if="filtereddata.length!=0">{{filtereddata.length}} Results</p>
            </div>
            <div class="row pl-2 pr-2 mb-4" >
                <div class="col-6 col-md-4 col-lg-3 pt-2 pr-1 pl-1" v-show="paginatedData" v-for="(data, index) in filtereddata" :key="index">  
                    <div class="moterbike"> 
                            <div class="card" v-on:click="display(data.vehicle_id)"> 
                                <div class="image text-center" style="min-height:50px;">
                                    <div class="top-left" v-if="data.status==4">
                                        <span>Sale Pending</span>
                                    </div>
                                    <!-- <div class="top-right" v-if="alreadyAdded(data.vehicle_id)" v-on:click="removeFromWish(data.vehicle_id)">
                                        <i class="fa fa-heart" aria-hidden="true"></i>
                                    </div>
                                      <div class="top-right" v-else v-on:click="addToWish(data.vehicle_id)">
                                        <i class="fa fa-heart-o"  aria-hidden="true"></i>
                                    </div> -->
                                     <div v-lazy-container="{ selector: 'img' }"> 
                                        <img :data-src="data.path" width="100%" height="30%"/>
                                    </div>
                                    <!-- <img v-if="data.length == 0" src="../assets/placeholder.png" width="100%"> -->
                                </div>
                                <div class="card-body text-left mt-1">
                                    <p class="bike-name bold"><span>{{data.model_id.make}} </span>{{data.model_id.modal_name}}
                                     <!-- <span>{{data.engine_cc}} </span>CC -->
                                     </p>
                                    <div class="d-flex justify-content-between safari">
                                        <p class="bold bike-sp">{{data.selling_price | currency}}</p>
                                        <!-- <i class="fa fa-heart-o" aria-hidden="true"></i>         -->
                                        <img class="premium" v-if="data.type == 'premium' && filter == 'all'" src="../assets/premium.svg" width="10%">
                                      
                                    </div>
                                </div>
                                
                            </div> 
                            <div>
                            </div>
                             <!-- <div class="card mt-2" v-if="index == 0"> 
                                <div class="image text-center mt-4" style="min-height:50px;">
                                    <img src="../assets/placeholder.png" width="100%">
                                </div>
                            </div>  -->
                    </div>                 
                </div>     
                <div v-if="show == true">
                    <p>data</p>
                </div>
            </div>          
        </div>
        <!-- <div class="col-md-12 mb-4">
            <div class="row">
                <div class="col-md-12 text-center" v-if="paginatedData.length != 0">
                    <button class="btn mr-2" v-on:click="prevPage" :disabled="pageNumber==0"><i class="fa fa-angle-double-left" aria-hidden="true"></i>prev</button>
                    <li v-for="(n, index) in pageCount" :key="index" class="d-inline">
                        <span class="px-3" style="cursor:pointer" v-bind:class="{pagenow : pageNumber == n - 1}"  v-on:click="gotopage(n - 1)">{{n}}</span>
                    </li>
                    <button class="btn ml-2" v-on:click="nextPage" :disabled="pageNumber == pageCount - 1">next <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                </div>
            </div>
         </div> -->

        <div class="loading text-center mb-4" style="min-height:200px" v-if="loading && filtereddata.length == 0">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> 
        <div class="loading text-center mb-4" style="min-height:200px" v-if="!loading && filtereddata.length == 0 ">
            <!-- <p class="mt-4 bold">sorry :(</p> -->
            
            
                <img src="../assets/out-of-stock-bikex.svg" width="10%">
           
            <p class="mt-4 bold">The vehicles are out of stock</p> 
            <!-- <p class="mt-4 bold">we are coming back on stock soon</p> -->
        </div> 
    <div >
        <!-- <div id="overlay" class="loading text-center mb-4" style="min-height:200px" v-if="loading">
            <div id="text" class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
            </div>
        </div> -->
    </div>
</div>
</template>
<script>
import * as _ from 'lodash'
export default {
     data(){
        return{
                    // displayImage:[],
                    // loading : true,
                    filter : 'all',
                    novehicle:false,
                    pageNumber: 0,
                    itemperpage:12,
                    show:false,
                    c_id:'',
                    wishlist:[]
        }
    },
    beforeCreate(){
                 this.$store.state.loading = true
    },
     created(){
            window.scrollTo({
                top: 0,
                left: 0,
            })
                        this.$store.dispatch('load_display_images');

        //   this.$store.dispatch('load_scooters');
        //   this.$store.dispatch('load_display_images');
    },
    mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
            })
    },
    beforeMount(){
    // window.console.log(this.$store.getters.images_array(10007))
    //  window.console.log(this.$store.state.display_images)
    this.c_id = localStorage.getItem('temp')
    // this.$http.get('https://backend-bikex.herokuapp.com/api/wishlist/'+ this.c_id)
    // .then(respon=>{this.wishlist= respon.data;window.console.log(this.wishlist)}).catch(()=>{this.loading = false});
    },
    methods:{
        display(id){
            this.$router.push('vehicle/' +id)
        },
        filterkey(id){
            this.pageNumber = 0
            this.filter = id
            // this.loading = false
             window.scrollTo({
                top: 0,
                left: 0,
            })
        },
        alreadyAdded(id){
            for(var i in this.wishlist){
                if(this.wishlist[i].v_id == id){
                    window.console.log(i)
                    return true
                }else{
                    return false
                }
            }
        },
        // addToWish(veh_id){
        //     if(this.c_id){
        //     this.$http.post('https://backend-bikex.herokuapp.com/api/wishlist',{
        //                     c_id:this.c_id,
        //                     v_id:veh_id
        //                 }).then(response=>{
        //                     window.console.log(response)
        //                      window.location.reload()
        //                 })
        //     }else{
        //         this.$swal({
        //         position: 'top-end',
        //         icon: 'error',
        //         title: 'Please Log in',
        //         showConfirmButton: false,
        //         timer: 2500
        //         })
        //         this.$router.push('/login')
        //     }
            
        // },
        // removeFromWish(){

        // },
        nextPage(){
             this.pageNumber++;
        },
        prevPage(){
            this.pageNumber--;
        },
        gotopage(page){
            this.pageNumber = page
        }
    },
    computed:{
        vehicles(){
             return this.$store.state.scooters;
        },
          loading(){
        return  this.$store.state.loading
        },
        displayImage(){
                 return  this.$store.state.display_images   
        },
        megaData(){
        const temp2 = []
        this.vehicles.forEach(x => {
            this.displayImage.forEach(y => {
            if (x.vehicle_id === y.vehicle_id) {
                temp2.push({ ...x, ...y })
            }
            })
        })
      return temp2
    },
    filtereddata(){
    const filterparams = this.filter
    if(filterparams === "all") {
				return this.megaData;
			} else {
				return this.megaData.filter(function(x) {
					return x.type === filterparams;
				}); 
			}
    },
      perpage(){
          return this.itemperpage
      },
       shuffle(){
       return  _.shuffle(this.filtereddata)
    },
    paginatedData(){
    const start = this.pageNumber * this.perpage,
          end = start + this.perpage;
     return this.shuffle.slice(start, end);
        },
    pageCount(){
      let l = this.shuffle.length,
          s = this.itemperpage;
      return Math.ceil(l/s);
    }
    
    }
}
</script>
<style scoped>
.safari{
    display: -webkit-flex;
    webkit-justify-content: space-between;
}
.premium_img{
    width: 25px;
}
img.premium {
    margin-top: -25px;
}
.pagenow{
    color:gray
}
.top-left {
  position: absolute;
  top: 0px;
  left: 0px;
  text-align: center;
    font-size: 12px;
    font-weight: 500;
    line-height: 14px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    white-space: nowrap;
    margin-bottom: 0px;
    color: #001232;
    background-color: #ffb52f;
    padding: 4px 8px;
}
.top-right {
  position: absolute;
  top: 0px;
  right: 0px;
  text-align: center;
    font-size: 20px;
    line-height: 14px;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    white-space: nowrap;
    padding: 4px 8px;
    cursor: pointer;
}
@media only screen and (max-width: 600px) {
    .top-left{
   
    font-size: 8px !important;
    line-height: 8px !important;
    letter-spacing: 0px !important;
    padding: 3px 8px !important;
}
    .premium_img{
        width: 13px !important;
    }
    img.premium {
    margin-top: -10px !important;
     width: 15% !important
}
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
        font-size: 10px !important;
        margin:0 !important
    }
     .section-title h2{
        font-size: 15px;
    }
    .card-body .bike-name{
        font-size: 10px !important
    }
    .color{
        font-size: 12px !important
    }
}
.top{
    margin-top: 80px;
}

.bold{
    font-weight: 500
}

.color{
    color:#001232;  
    font-weight: 500
}
.bike-name{
    text-transform: uppercase;
    color:#001232;
    font-size:17px !important;
}
.section-title p{
        font-size: 15px;
        font-weight: 500
    }
   .section-title h2{
        font-size: 18px;
    }  
.breadcrumb{
background-color: transparent;
padding:0 !important;
font-weight: bold;
}
.bread li{
    text-decoration: none;
    list-style: none
}
.breadcrumb li a{
        font-size: 15px;
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
    margin: 2px 0px;
    font-size: 15px;
    margin-top: 0px;
    padding:0px;
    cursor: pointer;
}

/* loading */
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