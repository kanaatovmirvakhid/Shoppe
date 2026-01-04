import { createRouter, createWebHistory } from 'vue-router'
// import { PAGE_NAMES } from '@/shared/config'

// import { ProductPage } from '@/page/product'
// import { NotFound } from '@/page/not-found'
// import { HomePage } from '@/page/home-page'
// import { CatalogPage } from '@/page/catalog-page'


export const routes = [
  // { path: '/', component: HomePage, name: PAGE_NAMES.home },
  // { path: '/catalog', component: CatalogPage, name: PAGE_NAMES.catalog},
  // { path: '/product/:documentId', component: ProductPage, name: PAGE_NAMES.product},
  // { path: '/not-found', component: NotFound, name:PAGE_NAMES.notFound},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
