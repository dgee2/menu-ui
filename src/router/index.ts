// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: () => import(/* webpackChunkName: "recipeList" */ '@/views/RecipeList.vue'),
  },
  {
    path: '/create-recipe',
    name: 'CreateRecipe',
    component: () => import(/* webpackChunkName: "createRecipe" */ '@/views/CreateRecipe.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
