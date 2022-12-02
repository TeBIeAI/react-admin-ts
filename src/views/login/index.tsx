import { useAuth } from '@/hooks/useAuth'
import { useLocation, useNavigate } from 'react-router-dom'

function Login() {
  const { signIn } = useAuth()
  const location = useLocation()
  const navigator = useNavigate()
  const from = location.state?.from ?? '/'

  return (
    <div>
      login页面
      <button
        onClick={() => {
          signIn()
          navigator(from)
        }}
      >
        点击登录
      </button>
    </div>
  )
}

export default Login
