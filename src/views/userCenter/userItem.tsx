import { useParams } from 'react-router-dom'

function UserItem() {
  const params = useParams()
  return <div>我是user-item 参数id: {params.useid}</div>
}

export default UserItem
