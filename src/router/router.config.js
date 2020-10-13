/**
 * 基础路由
 * @type { *[] }
 */

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/home'),
        meta: { title: '首页', keepAlive: false },
        children: []
      },
      {
        path: '/some',
        name: 'Some',
        component: () => import('@/views/home/home'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path: '/lib',
        name: 'Lib',
        component: () => import('@/views/home/home'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/home/home'),
        meta: { title: '关于我', keepAlive: false }
      }
    ]
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('../components/other/more.vue'),
    meta: { title: '更多', keepAlive: false }
  }
]
