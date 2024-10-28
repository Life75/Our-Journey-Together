import { createMemoryHistory, createRouter } from 'vue-router'

import Landing from './components/Landing.vue'
import SignIn from './components/SignIn.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/SignIn', component: SignIn },
]

export default createRouter({
  history: createMemoryHistory(),
  routes,
})