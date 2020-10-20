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
        meta: { title: '随心看', keepAlive: false }
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
        component: () => import('@/views/home/home'),
        meta: { title: '我的', keepAlive: true }
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
        path: '/video',
        name: 'Video_info',
        component: () => import('@/components/video_play/video_info'),
        meta: { title: '视频信息', keepAlive: false },
        children: [
          {
            path: '/video',
            name: 'Video_comment',
            component: () => import('@/components/video_play/video_comment'),
            meta: { title: '视频信息', keepAlive: false },
            children: []
          }
        ]
      },
      {
        path: '/video',
        name: 'Person_info',
        component: () => import('@/components/video_play/person_info'),
        meta: { title: '演员信息', keepAlive: false },
        children: []
      }
    ]
  }
]
