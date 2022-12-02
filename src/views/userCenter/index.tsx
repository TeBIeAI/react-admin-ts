import { Outlet } from 'react-router-dom'

function index() {
  return (
    <div>
      用户中心
      <div className='user-center'>
        <Outlet />
      </div>
    </div>
  )
}

export default index
