<template>
    <div class="profile col-md-10 centered">
       
            <div class="col-md-12 text-center mb-4">
                <div class="container header m-4 m-0 p-4">
                    <h3>@{{profile.firstname}} <span v-on:click="logout" class="logout">Logout</span>
                    </h3>
                    <p class="email">{{profile.email}}</p>
                </div>
            </div>
            <div class="col-md-12 text-center">
          
            <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" href="#profile" role="tab" data-toggle="tab">profile</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#bookings" role="tab" data-toggle="tab">Bookings</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#wishlist" role="tab" data-toggle="tab">wishlist</a>
            </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="profile">
                <div class="container mt-4 mb-4">
                    <div class="row col-md-10 centered">
                        <div class="col-md-6 mb-3">
                            <strong>First Name</strong>
                        </div>
                         <div class="col-md-6 mb-3 text-left">
                             {{profile.firstname}}
                        </div>
                        <div class="col-md-6 mb-3">
                            <strong>Last Name</strong>
                        </div>
                         <div class="col-md-6 mb-3 text-left">
                             {{profile.lastname}}
                        </div>
                        <div class="col-md-6 mb-3">
                            <strong>Phone</strong>
                        </div>
                         <div class="col-md-6 mb-3 text-left">
                             {{profile.phone}} <span class="badge badge-secondary">Verified</span>
                        </div>
                    </div>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="bookings">
                <div class="container mt-4 mb-4">
                    <p>You have not made any bookings yet</p>
                </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="wishlist">
                 <div class="container mt-4 mb-4">
                    <p>You have no wishlist yet</p>
                </div>
            </div>
            </div>


            </div>

            <div id="myModal" class="modal fade" role="dialog" v-if="notlogged">
                <div class="modal-dialog">

                    <!-- Modal content-->
                    <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                        <h4 class="modal-title">Modal Header</h4>
                    </div>
                    <div class="modal-body">
                        <p>Some text in the modal.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                    </div>

                </div>
                </div>
        </div>
</template>
<style scoped>
.centered{
    margin: 0 auto
}
.email{
    padding: 0;
    margin: 0;
    font-size: 10px;
    color: gray;
}
.logout{
    cursor: pointer;
    font-size: 14px;
    color: red
}
 .nav-tabs .nav-link.active{
    color: #ffb52f !important
}
a.nav-link {
    color: black !important;
    text-transform: uppercase
}
.tab-pane{
    min-height: 150px;
}
</style>
<script>
export default {
    data(){
        return{
            id:'',
            profile:[],
        }
    },
        created(){
        let auth = localStorage.getItem('token')
        this.id = localStorage.getItem('temp')
        if(!auth){
            this.$swal({
                position: 'top-end',
                icon: 'error',
                title: 'Please Log in',
                showConfirmButton: false,
                timer: 2500
                })
                this.$router.push('/login')
        }

         this.$http.get('http://localhost:3000/api/customers/'+ this.id)
          .then(response=>{
          this.profile = response.body
         })

    },
    methods:{
        logout(){
            localStorage.removeItem('token')
             localStorage.removeItem('temp')
             this.$router.push('/login')
        }
    }

}
</script>