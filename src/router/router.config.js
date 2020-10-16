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
        component: () => import('@/components/other/more'),
        meta: { title: '关于我', keepAlive: false }
      },
      {
        path: '/lib',
        name: 'Lib',
        component: () => import('@/components/video_play/video_action'),
        meta: { title: '首页', keepAlive: true }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/home/home'),
        meta: { title: '关于我', keepAlive: true }
      }
    ]
  },
  {
    path: '/more',
    name: 'More',
    component: () => import('@/components/other/more'),
    meta: { title: '更多', keepAlive: false }
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('@/components/video_play/video_action'),
    meta: { title: '视频播放', keepAlive: false },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/components/video_play/video_info'),
        meta: { title: '首页', keepAlive: false },
        children: []
      }
    ]
  }
]
