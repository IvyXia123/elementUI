import Main from '../components/Main'
import Login from './../components/Login'
import DataManagement from '../components/DataManagement.vue'
import ServicePlatform from '../components/ServicePlatform.vue'


const routes= [
  {
    path:'/',
    name:'main',
    component:Main,
    children:[
      {path:'dataManagement',name:'dataManagement',component:DataManagement},
      {path:'servicePlatform',name:'servicePlatform',component:ServicePlatform},
      {path:'*',redirect:'dataManagement'}
    ]
  },
  {path:'/login',name:'login',component:Login},
];

export default {
  mode:'history',
  base:__dirname,
  routes
}
