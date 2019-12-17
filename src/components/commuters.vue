<template>

<div class="bikes">              
        <div class="container col-md-12">  
           <div class="col-12 bread col-md-12">
               <div class="row">
                <div class="col-12 col-md-10 mt-4 p-0" style="margin:0 auto">
                     <ol class="breadcrumb pull-left">
                    <li class="breadcrumb-item"><router-link to="/scooter" exact-active-class="active">SCOOTER</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/traveller" class="left" exact-active-class="active">COMMUTER</router-link></li>
                    <li class="breadcrumb-item"><router-link to="/adventurer" class="left" exact-active-class="active">ADVENTURER</router-link></li>

                    </ol>

                </div>
               </div>
           </div>
             <div class="product-area mb-4 mt-3 p-0 col-md-10" style="margin:0 auto">
                <div class="container col-12 m-0 p-0">
                    <div class="section-title jumbotron m-0 mb-4 p-0 py-2 pb-2 text-center mb-50">
                        <p class="p-1 m-0"><span>Scooter</span>
                        - for your day to day travel. Now make it effortless and hassle-free.
                        </p>
                    </div>
                    <div class="product-tab-list text-center col-12 nav product-menu-mrg" role="tablist">
                        <a class="active"  data-toggle="tab" v-on:click="filterkey('all')">
                            <h4>ALL</h4>
                        </a>
                        <a data-toggle="tab" v-on:click="filterkey('premium')">
                            <h4>PREMIUM</h4>
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
                <div class="col-4 col-md-4 col-lg-3 pt-2 pr-1 pl-1" v-show="paginatedData" v-for="(image, index) in paginatedData" :key="index">  
                    <div class="moterbike"> 
                            <div class="card" v-on:click="display(image.vehicle_id)"> 
                                <div class="image text-center" style="min-height:50px;">
                                    <div class="top-left" v-if="image.status==4">
                                        <span >Sale Pending</span>
                                </div>
                                    <img v-if="image.length == 0" src="../assets/placeholder.png" width="100%">
                                    <img v-else :src="image.path" width="100%" height="30%">
                                </div>
                                <div class="card-body text-left mt-1">
                                    <p class="bike-name bold"><span>{{image.make}} </span>{{image.modal_name}}
                                     <!-- <span>{{image.engine_cc}} </span>CC -->
                                     </p>
                                    <div class="d-flex justify-content-between">
                                        <p class="bold bike-sp">{{image.selling_price | currency}}</p>
                                        <p class="bold bike-sp text-muted" style="text-transform:uppercase;">{{image.type}}</p>
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
        <div class="col-md-12 mb-4">
            <div class="row">
                <div class="col-md-12 text-center" v-if="paginatedData.length != 0">
                    <button class="btn mr-2" v-on:click="prevPage" :disabled="pageNumber==0"><i class="fa fa-angle-double-left" aria-hidden="true"> prev</i></button>
                    <li v-for="(n, index) in pageCount" :key="index" class="d-inline">
                        <span class="px-3" v-bind:class="{pagenow : pageNumber == n - 1}"  v-on:click="gotopage(n - 1)">{{n}}</span>
                    </li>
                    <button class="btn ml-2" v-on:click="nextPage" :disabled="pageNumber == pageCount - 1">next <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                </div>
            </div>
         </div>

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
export default {
     data(){
        return{
                    vehicles:[],
                    models:[],
                    displayImage:[],
                    mega:[],
                    loading:true,
                    loadingPage:true,
                    filter : 'all',
                    novehicle:false,
                    pageNumber: 0,
                    itemperpage:12,
                    show:false
        }
    },
    mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
            })
    //        setTimeout(()=>{
    //      this.loadingPage = false
    //       window.console.log(this.loading)
    //   }, 2000)
    },
    beforeMount(){
	this.$http.get('https://backend-bikex.herokuapp.com/api/fetch/live-vehicle')
      .then(response=>{this.vehicles= response.body;window.console.log('1')
      }).catch(()=>{this.loading = false});this.$http.get('https://backend-bikex.herokuapp.com/api/models/type/commuters')
      .then(res=>{this.models= res.body;window.console.log('2')}).catch(()=>{this.loading = false});
      this.$http.get('https://backend-bikex.herokuapp.com/api/upload-display')
      .then(resp=>{this.displayImage= resp.body.data;}).catch(()=>{this.loading = false});
    },
    methods:{
        display(id){
            this.$router.push('vehicle/' +id)
        },
        filterkey(id){
            this.pageNumber = 0
            this.filter = id
            this.loading = false
             window.scrollTo({
                top: 0,
                left: 0,
            })
        },
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
    paginatedData(){
    const start = this.pageNumber * this.perpage,
          end = start + this.perpage;
     return this.filtereddata.slice(start, end);
        },
    pageCount(){
      let l = this.filtereddata.length,
          s = this.itemperpage;
      return Math.ceil(l/s);
    }
    
    }
}
</script>
<style scoped>
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
    color: white;
    background-color: #ffb52f;
    padding: 4px 8px;
}
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