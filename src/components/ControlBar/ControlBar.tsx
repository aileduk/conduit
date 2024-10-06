import clsx from "clsx"
import { Link, useSearchParams } from "react-router-dom"

const ControlBar = () => {
  const [searchParams] = useSearchParams()
  const tag = searchParams.get("tag")

  const tabStyle = clsx("text-green-600 px-4 py-2 border-b-2 border-green-600", {
    "border-none text-gray-500": tag
  })

  return (
    <div className='py-2 border-b border-gray-300'>
      <Link to='/' className={tabStyle}>
        Global Feed
      </Link>
      {tag && <span className={`text-green-600 px-4 py-2 border-b-2 border-green-600`}>{`#${tag}`}</span>}
    </div>
  )
}

export default ControlBar
