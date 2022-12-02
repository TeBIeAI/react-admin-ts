import React, { LazyExoticComponent, ReactNode, Suspense } from 'react'
import { Spin } from 'antd'
import { USER_ROLE_ENUM } from '@/enums/user'

const lazyLoad = (Comp: LazyExoticComponent<any>): ReactNode => {
  return (
    <Suspense
      fallback={
        <Spin
          size='large'
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ...loading
        </Spin>
      }
    >
      <Comp />
    </Suspense>
  )
}

const routeMap: RouteMapProps[] = [
  {
    path: '/',
    element: lazyLoad(React.lazy(() => import('@/views/index'))),
    children: [
      {
        path: 'setting',
        element: lazyLoad(React.lazy(() => import('@/views/setting'))),
        meta: {
          title: '设置',
          auth: true,
          roles: [USER_ROLE_ENUM.GUEST]
        }
      },
      {
        path: 'user-center',
        element: lazyLoad(React.lazy(() => import('@/views/userCenter'))),
        meta: {
          title: '设置',
          auth: true,
          roles: [USER_ROLE_ENUM.ADMIN]
        },
        children: [
          {
            index: true,
            element: lazyLoad(
              React.lazy(() => import('@/views/userCenter/userItem'))
            )
          },
          {
            path: ':useid',
            element: lazyLoad(
              React.lazy(() => import('@/views/userCenter/userItem'))
            )
          }
        ]
      },
      {
        path: 'login',
        element: lazyLoad(React.lazy(() => import('@/views/login')))
      }
    ]
  },

  {
    path: '*',
    element: '我是404'
  }
]

export default routeMap
