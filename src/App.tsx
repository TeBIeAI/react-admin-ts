import { BrowserRouter, Link, useRoutes } from 'react-router-dom'
import routesMap from '@/routes/config'
import { AuthRoute } from '@/routes/routeGuide'
import { generateMenuTree } from '@/routes/helper'
import { useAppDispatch, useAppSelector } from './store/hooks'
import { setUserInfo } from '@/store/modules/userSlice'
import { USER_ROLE_ENUM } from './enums/user'
import { useMemo } from 'react'
import { cloneDeep } from 'lodash-es'

const RouteConfig: React.FC = () => {
  const { role } = useAppSelector(state => state.user)

  console.log('当前用户角色', role)

  const asyncAuthRoutes = useMemo(() => {
    console.log(22222)
    return generateMenuTree(cloneDeep(routesMap))
  }, [role])
  const Element = useRoutes(asyncAuthRoutes)

  return <AuthRoute>{Element}</AuthRoute>
}
// 收纳大师课汇顶科技阿是汇顶科技阿是抠脚大汉阿是客户端暗红色的客户收到看哈肯定哈卡打卡机啊山东科技哈肯定会教科文打卡机啊哈打开聚合物多卡位
const App: React.FC = () => {
  console.log(111)
  const dispatch = useAppDispatch()

  return (
    <div className='App'>
      <BrowserRouter>
        <div>
          <Link to='setting'>设置</Link>
          <Link to='user-center' style={{ margin: '10px' }}>
            用户中心
          </Link>
          <Link to='login'>前往登录</Link>
          <button
            onClick={() =>
              dispatch(
                setUserInfo({
                  name: '韩超',
                  userId: 78789,
                  role: USER_ROLE_ENUM.ADMIN
                })
              )
            }
          >
            切换角色
          </button>
        </div>
        <RouteConfig></RouteConfig>
      </BrowserRouter>
    </div>
  )
}

export default App
