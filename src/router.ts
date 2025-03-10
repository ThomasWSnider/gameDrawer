import { createRouter, createWebHashHistory } from "vue-router"

function loadPage(page: string) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/tictactoe',
    name: 'TicTacToe',
    component: loadPage('TicTacToePage')
  },
  {
    path: '/ultimatetictactoe',
    name: 'UltimateTicTacToe',
    component: loadPage('UltimateTicTacToePage')
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})