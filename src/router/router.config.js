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
        meta: { title: '首页', keepAlive: true, index: 10 },
        children: []
      },
      {
        path: '/some',
        name: 'Some',
        component: () => import('@/views/setting/bind/email'),
        meta: { title: '随心看', keepAlive: true, index: 10 }
      },
      {
        path: '/lib',
        name: 'Lib',
        component: () => import('@/views/chip_library/chip_library'),
        meta: { title: '片库', keepAlive: true, index: 10 }
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/user'),
        meta: { title: '我的', keepAlive: true, index: 10 },
        children: []
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('@/views/setting/setting'),
        meta: { title: '设置', keepAlive: true, index: 9 }
      },
      {
        path: '/user_info',
        name: 'User_info',
        component: () => import('@/views/setting/user_info'),
        meta: { title: '个人资料', keepAlive: true, index: 9 }
      },
      {
        path: '/account',
        name: 'Account',
        component: () => import('@/views/setting/account'),
        meta: { title: '账号安全', keepAlive: true, index: 9 }
      },
      {
        path: '/device',
        name: 'Device',
        component: () => import('@/views/setting/device'),
        meta: { title: '登录设备管理', keepAlive: true, index: 9 }
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
            name: 'VideoInfo',
            component: () => import('@/views/video/VideoInfo'),
            meta: { title: '视频信息', keepAlive: true },
            children: [
              {
                path: '/video',
                name: 'Video_comVideoCommentment',
                component: () => import('@/views/video/VideoComment'),
                meta: { title: '用户信息', keepAlive: true },
                children: []
              }
            ]
          },
          {
            path: '/video',
            name: 'PersonInfo',
            component: () => import('@/views/video/PersonInfo'),
            meta: { title: '演员信息', keepAlive: true },
            children: []
          }
        ]
      },
      {
        path: '/optimization',
        name: 'Optimization',
        component: () => import('@/views/setting/optimization'),
        meta: { title: '优化建议', keepAlive: true }
      },
      {
        path: '/check_phone',
        name: 'Check_phone',
        component: () => import('@/views/setting/bind/check_phone'),
        meta: { title: '更换手机号', keepAlive: true },
        children: []
      },
      {
        path: '/email',
        name: 'Email',
        component: () => import('@/views/setting/bind/email'),
        meta: { title: '绑定邮箱', keepAlive: true },
        children: []
      },
      {
        path: '/password',
        name: 'Password',
        component: () => import('@/views/setting/bind/password'),
        meta: { title: '设置密码', keepAlive: true },
        children: []
      },
      {
        path: '/phone',
        name: 'Phone',
        component: () => import('@/views/setting/bind/phone'),
        meta: { title: '绑定手机号', keepAlive: true },
        children: []
      },
      {
        path: '/bind',
        name: 'Bind',
        component: () => import('@/views/setting/bind'),
        meta: { title: '绑定', keepAlive: true },
        children: []
      }
    ]
  }
]
