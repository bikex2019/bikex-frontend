import home from './components/home'
import vehicles from './components/vehicles'
import commuters from './components/commuters'
import traveller from './components/traveller'
import adventurer from './components/adventurer'
import finance from './components/finance'
import terms from './components/termsandcondition'
import privacypolicy from './components/privacypolicy'
import disclaimerpolicy from './components/disclaimerpolicy'
import copyright from './components/copyright'
import faq from './components/faq'
import notFound from './components/notfound'
import display from './components/display'
import sell from './components/sell'
import checkout from './components/checkout'
import ourstory from './components/ourstory'
import pay from './components/payment'
import signup from './components/signin'
import login from './components/login'
import profile from './components/profile'
import payment from './components/payment'
import booking from './components/booking'
import invoice from './components/invoice'

export default[
    
   {path:'/', component:home},
   {path:'/vehicles/:id', component:vehicles},
   {path:'/commuters', component:commuters},
   {path:'/traveller', component:traveller},
   {path:'/adventurer', component:adventurer},
   {path:'/finance', component:finance},
   {path:'/termsandcondition', component:terms},
   {path:'/disclaimerpolicy', component:disclaimerpolicy},
   {path:'/privacypolicy', component:privacypolicy},
   {path:'/copyright', component:copyright},
   {path:'/faq', component:faq},
   {path:'/sell', component:sell},
   {path:'/ourstory', component:ourstory},
   {path:'/vehicle/:id', component:display},
   {path:'/checkout/:id',component:checkout},
   {path:'/booking/:id',component:booking},
   {path:'/invoice/:id',component:invoice},
   {path:'/payment/:id',component:payment},
   {path:'/payment',component:pay},
   {path:'/login', component:login},
   {path:'/signup', component:signup},
   {path:'/profile', component:profile},
   {path: '*',component:notFound}
   
]