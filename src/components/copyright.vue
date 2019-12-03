<template>
    
        <div class = "copyright-guidelines col-md-10 margin mt-4 mb-5">
  
         <h4 class="m-0 p-0 mb-3 text-center">COPYRIGHT GUIDLINE</h4>   
            <p class="text-left mt-3">This Copyright Guideline, together with our Terms of Use, Privacy Policy, Disclaimer Policy and any other Terms of Use or Guidelines connected with the use of the Platform, constitute a legally binding agreement (the “Agreement”) between You and the Website in relation to Your use of the Services.</p>
            
        <h5 class="text-left mt-5 font-bold " style="color: #4a4a4a;" >1. Ownership:</h5>
            <p class="mt-3 text-left"> All copyrights and trademarks held by the Platform with respect to its logos and content posted on the Website are the Intellectual Properties of Bikex Technologies Private Ltd operating the Website. The Company owns and controls all the copyright and other intellectual property rights in the Platform and all the copyright and other intellectual property rights in the Website are reserved.</p>
          <h5 class="text-left mt-5 font-bolder " style="color: #4a4a4a;" >2. Content:</h5> 
            <p class="mt-3 text-left">All the content (including without limitation the design, layout, text, graphics, images, sound, video and all software and source codes connected with the Website) are owned by or licensed to the Company or otherwise used by the Company as permitted by law. The content of the Platform embodies trade secrets and intellectual property rights protected under copyright and other intellectual property laws.</p>
          <h5 class="text-left mt-5 font-bolder " style="color: #4a4a4a;" >3. Reproduction:</h5> 
            <p class="mt-3 text-left">Any reproduction, modification, distribution, transmission, republication, display, in whole or in part, is prohibited without the express written permission of the Company.</p>
              <h5 class="text-left mt-5 font-bolder " style="color: #4a4a4a;" >4. Use of marks: </h5>
            <p class="mt-3 text-left">The use of some material made available on the Platform may be subject to additional terms and conditions contained in any agreement accompanying or relating to such material. These terms and conditions will be made available prior to the use of such material. The Company trademark, any of the Company’s product marks, and any other domain names operated and/or controlled by the Company (“Bikex Marks”) are the exclusive roperty of Bikex Technologies Private Ltd. You agree not to reproduce, copy, display, upload, post or use in any way the Bikex marks, without the prior written permission of Bikex Technologies Private Ltd.</p> 
           <h5 class="text-left mt-5 font-bolder " style="color: #4a4a4a;" >5. Acceptable and Unacceptable Use of the Website and Materials:</h5>
            <p class="mt-3 pl-3 text-left"><strong>5.1. </strong>You may view pages from our Website in a web browser, download pages from our Website for caching in a web browser</p>
             <p class="mt-3 pl-3 text-left"><strong>5.2. </strong>Except as expressly permitted by the other provisions of this notice, you must not download any material from our Website or save any such material to your computer.</p>
             <p class="mt-3 pl-3 text-left"><strong>5.3. </strong>Except as expressly permitted by this notice, you must not edit or otherwise modify any material on our website</p>
             <p class="mt-3 pl-3 text-left"><strong>5.4. </strong>Unless you own or control the relevant rights in the material, you must not:</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.1. </strong>republish material from our Website (including republication on another Website) in violation of this Copyright Guidelines;</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.2. </strong>sell, rent or sub-license material from our Website;</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.3. </strong>show any material from our Website in public;</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.4. </strong>exploit material from our Website for a commercial purpose; or</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.5. </strong>redistribute material from our Website, save to the extent expressly permitted by this notice.</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.6. </strong> use our Website in any way or take any action that causes, or may cause, damage to the Website or impairment of the performance, availability or accessibility of the Website</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.7. </strong> use our Website in any way that is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.8. </strong>use our Website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software; or</p>
             <p class="mt-3 pl-5 text-left"><strong>5.4.9. </strong>conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to our website without our express written consent.</p> 
             <p class="mt-3 pl-3 text-left"><strong>5.5. </strong> Any violation of this clause shall result in criminal and civil actions taken against you immediately without notice</p>      
          <h5 class="text-left mt-5 font-bolder " style="color: #4a4a4a;" >6. Enforcement of Copyright</h5> 
             <p class="mt-3 text-left">We take the protection of our copyright very seriously. If we discover that you have used our copyright materials in contravention of the license set out in this notice, we may bring legal proceedings against you, seeking monetary damages and/or an injunction to stop you using those materials. You could also be ordered to pay legal costs.</p>

          
             
        </div>
   
</template>
<script>
export default {
    data(){
        return{
            loading:true
        }
    },
     mounted(){
        window.scrollTo({
                top: 0,
                left: 0,
            })
            setTimeout(()=>{
         this.loading = false
          window.console.log(this.loading)
      }, 2000)
    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @media only screen and (max-width: 600px) {
  h4{
    text-align: center !important;
    font-size: 18px;
    font-weight: bold
  }
  p{
      font-size: 12px !important
  }
.copyright-guidelines{
      margin-top: 80px!important
  }
  h5{
    font-size: 15px !important 
  }
}

h4{
font-weight: 700;
font-size: 20px;
}

p{
    font-weight:light;
    font-size: 13px;
    font-weight: 500;
    text-align: justify !important;
}
h5{
        font-size: 16px;
        font-weight: bold;
            color:black !important;
        letter-spacing: 0.6px;
        text-transform: uppercase
}
.margin{
    margin:0 auto;
}
.jumbo-block {
    font-size: 13px;
    background-color: #f2f2f2;
    display: block;
    text-align: justify !important;
}
.privacy-policy{
    margin: 0 auto;
    background-color:white;
}
ul{
    font-size: 13px;
    font-weight: 500;
    display: block;
    list-style-type: disc;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
   
}

.legal-bullet-list{
 
    line-height: 2.3;
    letter-spacing: 0.3px;
    color: #041022;

  }

  .red{
      color:red
  }
  .abc{
      padding-bottom:75px;
  }
  .padding{
      padding-bottom:35px;
  }
</style>