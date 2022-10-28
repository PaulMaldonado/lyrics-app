import { createRouter, createWebHistory } from "vue-router";
import SongId from './views/SongId.vue'

const routes = [
  {
    path: '/song/:id',
    name: 'SongId',
    component: SongId
  }  
]

const history = createWebHistory()

const router = createRouter({
    history,
    routes
})

export default router