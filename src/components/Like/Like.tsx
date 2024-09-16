import { FC } from "react"
import { Link } from "react-router-dom"
interface LikeProps {
  like: number
}
const Like: FC<LikeProps> = ({ like }) => {
  return <Link to='/'>{like}</Link>
}

export default Like
