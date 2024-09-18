import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { fetchPopularTags } from "../../store/features/articlesSlice/api"
import Tag from "../Tag/Tag"

const PopularTags = () => {
  const dispatch = useAppDispatch()
  const { tagList } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchPopularTags())
  }, [dispatch])

  return (
    <aside className='md:w-1/4 p-3 bg-gray-200 h-min'>
      <h2 className="mb-2">Popular Tags</h2>
      <ul className="flex flex-wrap gap-2">
        {tagList.map(tag => (
          <Tag key={tag} tag={tag} isTagList/>
        ))}
      </ul>
    </aside>
  )
}

export default PopularTags
