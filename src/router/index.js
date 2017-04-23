import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Join from '@/components/Join'
import MemberList from '@/components/MemberList'
import ProjectList from '@/components/ProjectList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    // {
    //   path: '/apply-project',
    //   name: 'ApplyProject',
    //   component: Hello
    // },
    {
      path: '/project',
      name: 'ProjectList',
      component: ProjectList
    },
    {
      path: '/member',
      name: 'MemberList',
      component: MemberList
    }
    // {
    //   path: '/documents',
    //   name: 'Documents',
    //   component: Hello
    // }
  ]
})
