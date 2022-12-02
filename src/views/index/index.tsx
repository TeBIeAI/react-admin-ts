import { useAppSelector } from '@/store/hooks'
import { Outlet } from 'react-router-dom'

function Index() {
  const user = useAppSelector(state => state.user)

  return (
    <div>
      我是index
      {user.name ? <p>{user.name}</p> : <p>没有登录</p>}
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default Index
