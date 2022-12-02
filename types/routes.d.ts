import type { RouteObject } from 'react-router-dom'
import { USER_ROLE_ENUM } from '@/src/enums/user'

declare global {
  type RouteMapProps = {
    meta?: {
      // auth代表该页面是否需要登录
      auth?: boolean
      // roles代表哪些角色才能访问
      roles?: USER_ROLE_ENUM[]
      // unRoles代表哪些角色不能访问（加这个字段是为了避免只屏蔽一个角色的时候roles写很长一串）。
      unRoles?: USER_ROLE_ENUM[]
      icon?: string
      title: string
    }
    children?: HRouteProps[]
  } & RouteObject
}
