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
      keepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/home'),
        meta: { title: '首页', keepAlive: true },
        children: []
      },
      {
        path: '/some',
        name: 'Some',
        component: () => import('@/views/short/short'),
        meta: { title: '随心看', keepAlive: true }
      },
      {
        path: '/lib',
        name: 'Lib',
        component: () => import('@/views/chip_library/chip_library'),
        meta: { title: '片库', keepAlive: true }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/user'),
        meta: { title: '我的', keepAlive: true },
        children: []
      }
    ]
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('@/views/other/more'),
    meta: { title: '更多', keepAlive: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/other/search'),
    meta: { title: '搜索', keepAlive: true }
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('@/views/user/record'),
    meta: { title: '观看记录', keepAlive: true }
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('@/views/user/collection'),
    meta: { title: '收藏记录', keepAlive: true }
  },
  {
    path: '/vip',
    name: 'Vip',
    component: () => import('@/views/vip/vip'),
    meta: { title: '会员', keepAlive: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/login'),
    meta: { title: '登录', keepAlive: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/user/register'),
    meta: { title: '注册', keepAlive: true }
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/views/video/video'),
    meta: { title: '视频播放', keepAlive: true },
    children: [
      {
        path: '/video',
        name: 'Video_info',
        component: () => import('@/views/video/VideoInfo'),
        meta: { title: '视频信息', keepAlive: true },
        children: [
          {
            path: '/video',
            name: 'Video_comment',
            component: () => import('@/views/video/VideoComment'),
            meta: { title: '用户信息', keepAlive: true },
            children: []
          }
        ]
      },
      {
        path: '/video',
        name: 'Person_info',
        component: () => import('@/views/video/PersonInfo'),
        meta: { title: '演员信息', keepAlive: true },
        children: []
      }
    ]
  }
]
