import { store } from '@/store'

export function generateMenuTree(routes: RouteMapProps[]) {
  const { role } = store.getState().user

  return routes
    .map(route => {
      if (route.meta) {
        const { roles: canIn, unRoles: cantIn } = route.meta

        // 以unRoles 优先
        if (Array.isArray(cantIn) && cantIn.includes(role)) return null

        if (Array.isArray(canIn) && !canIn.includes(role)) return null
      }

      if (!route.children) return route
      route.children = generateMenuTree(route.children)
      return route
    })
    .filter(i => i !== null) as RouteMapProps[]
}
