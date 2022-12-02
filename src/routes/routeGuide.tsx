import { useAuth } from '@/hooks/useAuth'
import { Fragment, ReactNode } from 'react'
import { matchRoutes, Navigate, useLocation } from 'react-router-dom'
import routeMap from './config'

// eslint-disable-next-line react/prop-types
export const AuthRoute: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLogin } = useAuth()
  const location = useLocation()

  const mathches = matchRoutes(routeMap, location)

  const isNeedLogin = mathches?.some(item => {
    const route = item.route
    if (!route.meta) return false
    return route.meta.auth
  })

  if (isNeedLogin && !isLogin) {
    return <Navigate to='/login' state={{ from: location.pathname }} replace />
  }

  return <Fragment>{children}</Fragment>
}
