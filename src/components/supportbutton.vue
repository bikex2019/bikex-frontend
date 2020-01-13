<template>
<div id="support-icon" class="text-right p-2">
       <a href="tel:+91 9742744444" class="p-2 color">
           <i class="fa fa-phone size" aria-hidden="true"></i>
            <span class="mobile pl-3">9742744444</span>
       </a>
</div>
</template>

<style scoped>

#support-icon {
position: fixed;
bottom: 10px;
right: 10px;
background-color: #ffb52f;
border-radius: 40px;
-webkit-transform: translate3d(0,0,0);
-moz-transform: translate3d(0,0,0);
transform: translate3d(0,0,0);
}
.color{
    color: black;
    font-size: 15px
}
 @media only screen and (max-width: 600px) {
.mobile{
  display: none
}
 }
</style>