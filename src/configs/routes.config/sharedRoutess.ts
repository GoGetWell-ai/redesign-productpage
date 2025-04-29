import Home from '@/views/Home'; 
import {AppRoute} from '@/types/route.types'; 
const sharedRoutes:AppRoute[]=[
  {
    path:'/',
    component:Home,
    exact:true,
    title:'Home',
  },
];
export default sharedRoutes;
