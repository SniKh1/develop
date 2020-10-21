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
        component: () => import('@/components/home/home'),
        meta: { title: '首页', keepAlive: true },
        children: []
      },
      {
        path: '/some',
        name: 'Some',
        component: () => import('@/components/short/short'),
        meta: { title: '随心看', keepAlive: true }
      },
      {
        path: '/lib',
        name: 'Lib',
        component: () => import('@/components/chip_library/chip_library'),
        meta: { title: '片库', keepAlive: true }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/components/user/user'),
        meta: { title: '我的', keepAlive: true },
        children: []
      }
    ]
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('@/components/other/more'),
    meta: { title: '更多', keepAlive: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/components/other/search'),
    meta: { title: '更多', keepAlive: true }
  },
  {
    path: '/record',
    name: 'Record',
    component: () => import('@/components/user/record'),
    meta: { title: '观看记录', keepAlive: true }
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('@/components/user/collection'),
    meta: { title: '收藏记录', keepAlive: true }
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/components/video_play/video_action'),
    meta: { title: '视频播放', keepAlive: true },
    children: [
      {
        path: '/video',
        name: 'Video_info',
        component: () => import('@/components/video_play/video_info'),
        meta: { title: '视频信息', keepAlive: true },
        children: [
          {
            path: '/video',
            name: 'Video_comment',
            component: () => import('@/components/video_play/video_comment'),
            meta: { title: '用户信息', keepAlive: true },
            children: []
          }
        ]
      },
      {
        path: '/video',
        name: 'Person_info',
        component: () => import('@/components/video_play/person_info'),
        meta: { title: '演员信息', keepAlive: true },
        children: []
      }
    ]
  }
]
