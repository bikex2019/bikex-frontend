<template>
     <div class="site-wrap" id="home-section">


    <div class="site-section col-md-6 margin ">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 margin text-left mt-0" >
            <img src="../assets/story2.png" alt="Image" class="img-fluid">
          </div>
          <div class="col-md-6">
            <div class="heading-39101 mb-5">
              
              <h3>Our Story</h3>
            </div>
            <p class="fontsize">The purpose of giving these machines a second life through creative recycling is what compelled us to kickstart this company. These preloved vehicles have once been owned, used and undoubtedly brought greatest of pleasures to the one riding them. The wide array of vehicles gets a complete overhaul and is tuned up to give it a new feel. Part by part they are disassembled, thoroughly cleaned, and of course, re-greased. The parts are replaced with brand new original spares and everything – and we mean everything – is screwed back together.</p>
            <p></p>
          </div>
          
        </div>
      </div>
    </div>


    <div class="site-section col-md-6 margin">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 ">
            <div class="heading-39101 mb-5">
              
              <h3>Our Mission</h3>
            </div>
            <p class="fontsize">Our mission is to ensure that every individual has the opportunity to own a vehicle and travel independently. We aspire to become the most credible and reliable company selling preloved, refurbished vehicles.</p>
          </div>
           <div class="col-md-6 margin  text-right" >
            <img src="../assets/mission2.png" alt="Image" class="img-fluid">
          </div>
        </div>
      </div>
    </div>

     <div class="site-section  col-md-6 margin mt-0">
      <div class="container">
        <div class="row align-items-center">
           <div class="col-md-6 margin text-left" >
            <img src="../assets/vision2.png" alt="Image" class="img-fluid">
          </div>
          <div class="col-md-6">
            <div class="heading-39101 mb-5">
              
              <h3>Our Vision</h3>
            </div>
            <p class="fontsize">To make preloved, refurbished vehicles accessible to every individual and to ensure the online purchase process is quick, hassle-free and convenient.</p>
            <p></p>
          </div>
         
        </div>
      </div>
    </div>

     </div>
  </template>

<script>
export default {
}
</script>

<style scoped>
.fontsize{
    line-height: 1.7;
    color: #364d59 !important;
    font-weight: 300;
    font-size: 0.9rem;
    font-family: "Work Sans", sans-serif;
    
}

.margin{
  margin: 0 auto;
}
 @keyframes fade-in{
  0%{
    opacity: 0;
  }
    100%{
    opacity: 1;
  }
    
  }
.accordion {
  color: #444;
  background-color: transparent;
  cursor: pointer;
  padding: 18px 0px 18px 0px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  font-weight: bold;
  transition: 0.2s;
  border-bottom: 1px solid rgb(138, 117, 117,0.2)
}

.active, .accordion:hover {
  border-bottom: 1px solid #ffb52f
}

.panel {
  height: 0;
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;
  overflow: hidden;
 
}
.panel100{
    transition: 2s;
   height:100%;
   animation: fade-in 2s;
  transition:height 5s ease-in;
   
}
.site-section {
  padding: 2.5em 0; }
  @media (min-width: 768px) {
    .site-section {
      padding: 5em 0; } }
  .site-section.site-section-sm {
    padding: 4em 0; }

/* Blocks */
.site-section-cover {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center; }
  .site-section-cover,
  .site-section-cover .container {
    position: relative;
    z-index: 2; }
  .site-section-cover,
  .site-section-cover .container > .row {
    height: calc(100vh - 196px);
    min-height: 677px; }
    @media (max-width: 991.98px) {
      .site-section-cover,
      .site-section-cover .container > .row {
        height: calc(70vh - 196px);
        min-height: 600px; } }
  .site-section-cover.overlay {
    position: relative; }
    .site-section-cover.overlay:before {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1; }
  .site-section-cover.inner-page,
  .site-section-cover.inner-page .container > .row {
    height: auto;
    min-height: auto;
    padding: 2em 0; }
  .site-section-cover.img-bg-section {
    background-size: cover;
    background-repeat: no-repeat; }
  .site-section-cover h1 {
    font-size: 3rem;
    color: #fff;
    line-height: 1;
    font-family: "Work Sans", sans-serif;
    font-weight: 900; }
    @media (max-width: 991.98px) {
      .site-section-cover h1 {
        font-size: 2rem; } }
  .site-section-cover p {
    font-size: 15px;
    color: #fff; }

.site-section {
  padding: 7rem 0; }
  @media (max-width: 991.98px) {
    .site-section {
      padding: 3rem 0; } }
.heading-39101 {
  position: relative; }
  .heading-39101 .backdrop {
    line-height: 1;
    top: -20%;
    position: absolute;
    text-transform: uppercase;
    z-index: -1;
    font-weight: 900 !important;
    font-size: 5rem;
    color: #efefef; }
    .heading-39101 .backdrop.text-center {
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%); }



.subtitle-39191 {
  color: #ffb53f;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold; }


  .bg-image > .container {
    position: relative;
    z-index: 1; }


.site-section {
  padding: 7rem 0; }
  @media (max-width: 991.98px) {
    .site-section {
      padding: 3rem 0; } }

.card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem; }
  .card > hr {
    margin-right: 0;
    margin-left: 0; }
  .card > .list-group:first-child .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem; }
  .card > .list-group:last-child .list-group-item:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem; }

.card-body {
  -webkit-box-flex: 1;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem; }

.card-title {
  margin-bottom: 0.75rem; }

.card-subtitle {
  margin-top: -0.375rem;
  margin-bottom: 0; }

.card-text:last-child {
  margin-bottom: 0; }

.card-link:hover {
  text-decoration: none; }

.card-link + .card-link {
  margin-left: 1.25rem; }

.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125); }
  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0; }
  .card-header + .list-group .list-group-item:first-child {
    border-top: 0; }

.card-footer {
  padding: 0.75rem 1.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  border-top: 1px solid rgba(0, 0, 0, 0.125); }
  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px); }

.card-header-tabs {
  margin-right: -0.625rem;
  margin-bottom: -0.75rem;
  margin-left: -0.625rem;
  border-bottom: 0; }

.card-header-pills {
  margin-right: -0.625rem;
  margin-left: -0.625rem; }

.card-img-overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1.25rem; }

.card-img {
  width: 100%;
  border-radius: calc(0.25rem - 1px); }

.card-img-top {
  width: 100%;
  border-top-left-radius: calc(0.25rem - 1px);
  border-top-right-radius: calc(0.25rem - 1px); }

.card-img-bottom {
  width: 100%;
  border-bottom-right-radius: calc(0.25rem - 1px);
  border-bottom-left-radius: calc(0.25rem - 1px); }

.card-deck {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }
  .card-deck .card {
    margin-bottom: 15px; }
  @media (min-width: 576px) {
    .card-deck {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px; }
      .card-deck .card {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-flex: 1;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px; } }

.card-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }
  .card-group > .card {
    margin-bottom: 15px; }
  @media (min-width: 576px) {
    .card-group {
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-flow: row wrap;
      flex-flow: row wrap; }
      .card-group > .card {
        -webkit-box-flex: 1;
        -ms-flex: 1 0 0%;
        flex: 1 0 0%;
        margin-bottom: 0; }
        .card-group > .card + .card {
          margin-left: 0;
          border-left: 0; }
        .card-group > .card:not(:last-child) {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0; }
          .card-group > .card:not(:last-child) .card-img-top,
          .card-group > .card:not(:last-child) .card-header {
            border-top-right-radius: 0; }
          .card-group > .card:not(:last-child) .card-img-bottom,
          .card-group > .card:not(:last-child) .card-footer {
            border-bottom-right-radius: 0; }
        .card-group > .card:not(:first-child) {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0; }
          .card-group > .card:not(:first-child) .card-img-top,
          .card-group > .card:not(:first-child) .card-header {
            border-top-left-radius: 0; }
          .card-group > .card:not(:first-child) .card-img-bottom,
          .card-group > .card:not(:first-child) .card-footer {
            border-bottom-left-radius: 0; } }

.card-columns .card {
  margin-bottom: 0.75rem; }

@media (min-width: 576px) {
  .card-columns {
    -webkit-column-count: 3;
    column-count: 3;
    -webkit-column-gap: 1.25rem;
    column-gap: 1.25rem;
    orphans: 1;
    widows: 1; }
    .card-columns .card {
      display: inline-block;
      width: 100%; } }

.accordion > .card {
  overflow: hidden; }
  .accordion > .card:not(:first-of-type) .card-header:first-child {
    border-radius: 0; }
  .accordion > .card:not(:first-of-type):not(:last-of-type) {
    border-bottom: 0;
    border-radius: 0; }
  .accordion > .card:first-of-type {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0; }
  .accordion > .card:last-of-type {
    border-top-left-radius: 0;
    border-top-right-radius: 0; }
  .accordion > .card .card-header {
    margin-bottom: -1px; }

.person-29191 h2 {
  font-size: 18px; }

.person-29191 .caption {
  font-size: 14px;
  text-transform: uppercase;
  color: #888;
  letter-spacing: .1rem; }
caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom; }
.figure-caption {
  font-size: 90%;
  color: #6c757d; }


</style>