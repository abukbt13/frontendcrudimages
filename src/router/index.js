import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateImage from '../views/CreateImage.vue'
import Registration from  '../views/Registration.vue'
import EditImage from '../views/EditImage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateImage
   },
  {
    path: '/edit/:id',
    name: 'EditImage',
    component: EditImage
   },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
