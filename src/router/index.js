import Vue from 'vue'
import Router from 'vue-router'
import AddTask from '../views/AddTask.vue'
import TaskList from '../views/TaskList.vue'
import CombinedView from '../views/CombinedView.vue'
import HomeView from '../views/HomeView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/addtask',
      name: 'AddTask',
      component: AddTask
    },
    {
      path: '/tasks',
      name: 'TaskList',
      component: TaskList
    },
    {
      path: '/combined',
      name: 'CombinedView',
      component: CombinedView
    }
  ]
})
