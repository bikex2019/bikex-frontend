<template>
    
        <div class = "privacy-policy col-md-10 mt-4 mb-5">
         <h4 class="text-center mb-4 m-0 p-0">DISCLAIMER POLICY</h4>
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
  @media only screen and (max-width: 600px) {
  h4{
    text-align: center !important;
    font-size: 18px;
    font-weight: bold
  }
  p{
      font-size: 12px !important
  }
   .privacy-policy{
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