<template>
    
        <div class = "privacy-policy col-md-10 mt-5 mb-5">
         <h2 class="mt-5 m-0 p-0">PRIVACY POLICY</h2>
            <div class="col-md-12 m-0 p-0">
                 <p class="jumbo-block  p-3">We are committed to protecting the personal information that you share with us. 
                Please read this Privacy Policy carefully, as it sets forth our practices regarding the information we collect
                from you and your options to limit our use and disclosure of your information. If you need to pull over and call for service,
                email us at <a href="mailto:tech@bikex.in"><span style='color: #ffb52f'>tech@bikex.com</span></a></p>
             </div>   
            <p class="text-left">This Privacy Policy, together with our Terms of Use, Copyright Guidelines, Disclaimer Policy and any other Terms of Use or Guidelines connected with the use of this Platform, constitute a legally binding agreement (the “Agreement”) between You and Bikex (hereinafter referred to as the “Company”), in relation to your use of their Services. This Privacy Policy applies to this Website which is engaged in the business of hosting a Platform for leasing or renting motor vehicle of any kind, to any person seeking such services. The Company is concerned about the privacy of the Users on the Platform and has provided this Privacy Policy to familiarize you with the way the Platform collects, uses, stores, discloses and transfers your Personal Information (as defined below) collected through the Website.</p>
        <h5 class="text-left mt-5" style="color: #4a4a4a;" >Information we collect</h5>
            <p class="mt-3 text-left">The Company seeks to serve the Users who approach the Company for leasing or renting motor vehicles. For the aforementioned to be possible, it is essential for the Website to collect and use certain information. The personal identification information includes, but it not limited to, your name, last name, age, title, e-mail address, name, residential address, office address, valid telephone number, alternate telephone number, details of motor vehicle license and other appropriate details that would help the Company in verifying your identity.</p>
            <p class="mt-3 text-left">This information is collected by the Website only if they are submitted by the Users. The objective behind collecting your personal information is to provide better services and to perform various site related activities with greater convenience and efficiency. The Platform may collect personal identification information to register Users on the Website, keep a record of the services sought by the Users and for performing other website related activities. Due to the nature of services provided by the Website, the Platform may disclose your personal information to third parties, with your explicit consent, to provide you with the best information for which you accessed the Website’s service.</p>
            <p class="mt-3 text-left">The Platform may also disclose information in response to a court order or government request, or when it would be reasonably necessary to disclose the said information to protect the rights of the Platform, third parties, or the public at large. The Platform may disclose information to comply with legal process, to enforce their Terms of Use, to protect their operations and rights, privacy and safety of the properties and to pursue any available legal remedies. The non-personally identifiable information such as your IP address, browser type, domain names, access times and referring website addresses are automatically collected from Visitors or Users, when you interact with the Website.</p>
        <h5 class="text-left mt-5 font-bold " style="color: #4a4a4a;" >Use of information collected to process payments</h5>
             <p class="mt-3 text-left">If you decide to access our services on the Website, we collect some additional information to complete the transaction for renting/leasing the motor vehicles. We collect information such as billing address, a credit/debit number, credit/debit expiration date, tracking information from cheques/money orders and/or other necessary payment details to process the payments. Whatever your chosen online mode of payment, you can rest assured that PayU Money, the Company’s trusted gateway partner use secure encryption technology to keep your transactional details confidential always. These gateways are managed by leading Banks who use the 3D Secure password service, created by you, to provide an additional layer of security to our online transactions. While availing any of the payment method(s) available on the Website, the Platform will not assume liability, monetary or consequential, for any loss caused to Users due to payment issues arising out of the transactions.</p>
          <h5 class="text-left mt-5 font-bold " style="color: #4a4a4a;" >Web Browser Cookies</h5>   
            <p class="mt-3 text-left">A cookie is a small piece of text file stored by the website on a user’s computer hard disk, when the website is opened. The Website uses cookies to improve the quality interaction of users with the website and allows you to enjoy our site more. We may use cookies to store a unique identifier for logged in users to enhance user experience, such as when you use the password protected pages of our site. If you chose to disable the cookies, you might not be able to fully experience the interactive features of our website</p>
            <h5 class="text-left mt-5 font-bold " style="color: #4a4a4a;" >Choice/Opt-Out/Unsubscribe from the Website</h5>
            <p class="mt-3 text-left">The Website provides all its Customers with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from The Platform or on behalf of any of their partners after setting up an Account. You can unregister/unsubscribe from the lists/newsletters/ any promotional mails by pressing the ‘unsubscribe’ button provided in the promotional communications sent to you. You also have the option of deleting your account that you created on the Website at any point of time.</p>
          <h5 class="text-left mt-5 font-bold " style="color: #4a4a4a;" >Protecting Information</h5> 
            <p class="mt-3 text-left">We take appropriate measures to protect data collected against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our website. </p>
         <h5 class="text-left mt-5 font-bold " style="color: #4a4a4a;" >Changes to this Privacy Policy</h5> 
            <p class="mt-3 text-left">The Platform has the discretion to make amendments in the privacy policy as it may deem fit, without any prior notice. . The users will be sent an email to notify them for the changes being made. Continued use of the website, even after the changes made, shall constitute your acceptance of the change. Therefore, the user is asked to review this privacy policy frequently and staying aware of changes being made in it. </p>
          <h5 class="text-left mt-5 font-bolder " style="color: #4a4a4a;" >Contact us: </h5> 
             <p class="mt-3 text-left">If you wish to contact us for any reason regarding our Privacy Policy, kindly e-mail it to us at the following address:</p>
             <p class="mt-2 text-left">E-mail address: info@bikex.in</p>
              <p class="mt-2 text-left">For more information, please visit our <span style="color: #ffb52f">‘Terms and Conditions’</span> page.</p>
        
            <div id="overlay" v-if="loading">
               <div id="text">
                 <div class="loader"></div>
               </div>
               
            </div>
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

h2{
    font-family: 'Montserrat', sans-serif;
}
p{
    font-weight:light;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    letter-spacing: 0.7px;
    line-height: 1.6;
}
h5{
        font-size: 20px;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        color:black;
          letter-spacing: 0.6px;
}
.margin{
    margin:0 auto;
}
.jumbo-block {
    font-size: 15px;
    background-color: #f2f2f2;
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.25px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
.privacy-policy{
    margin: 0 auto;
    background-color:white;
}

   @media only screen and (max-width: 600px) {
  h2{
    font-family: 'Montserrat', sans-serif;
    text-align: center !important;
    font-size: 25px;
    font-weight: bold
  }
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
  background-color: rgba(233, 227, 227, 0.8);
  z-index: 2;
  cursor: pointer;
}

#text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  color: black;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}

.loader::before{
    content: '';
      display: block;
      --color:#ffb52f;
      width: 100px;
      height: 100px;
      background-color: var(--color);
      animation: rotate 3s infinite;
  }
  .loader{
    --color: #5d62bd;
    width: 100px;
    height: 100px;
    background-color: var(--color);
    outline: 6px solid var(--color);
    outline-offset: -1px;
    transform: rotate(45deg) scale(0.5);
  }
  @keyframes rotate {
      0% {
      transform-origin: bottom left;
      transform: translate(-5px, -105px) rotate(0deg) scale(1.1)
      }
      25% {
      transform-origin: bottom left;
      transform: translate(-5px, -105px) rotate(-180deg) scale(1.1);
      }
      26% {
      transform-origin: top left;
      transform: translate(-5px, 105px) rotate(-180deg) scale(1.1)
      }
      50% {
      transform-origin: top left;
      transform: translate(-5px, 105px) rotate(-360deg) scale(1.1);
      }
      51% {
      transform-origin: top right;
      transform: translate(5px, 105px) rotate(-360deg) scale(1.1)
      }
      75% {
      transform-origin: top right;
      transform: translate(5px, 105px) rotate(-540deg) scale(1.1)
      }
      76% {
      transform-origin: bottom right;
      transform: translate(5px, -105px) rotate(-540deg) scale(1.1)
      }
      100% {
      transform-origin: bottom right;
      transform: translate(5px, -105px) rotate(-720deg) scale(1.1)
      }
  }
  
</style>