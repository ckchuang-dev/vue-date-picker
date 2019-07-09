import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'calendar-demo',
      component: () => import('./pages/CalendarDemo')
    },
    {
      path: '/datePickerDemo',
      name: 'date-picker-demo',
      component: () => import('./pages/DatePickerDemo')
    }
  ]
})
