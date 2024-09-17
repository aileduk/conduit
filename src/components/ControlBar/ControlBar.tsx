import { Link } from "react-router-dom"

const ControlBar = () => {
  return (
    <div className='py-2 border-b border-gray-300'>
      <Link to='/' className='text-green-600 px-4 py-2 border-b-2 border-green-600'>
        Global Feed
      </Link>
    </div>
  )
}

export default ControlBar
