import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { fetchArticleDetails } from "../../store/features/articlesSlice/api"

const ArticleDetails = () => {
  const dispatch = useAppDispatch()
  const { slug } = useParams<string>()
  const { articleDetails } = useAppSelector(state => state.articles)

  useEffect(() => {
    slug && dispatch(fetchArticleDetails(slug))
  }, [dispatch, slug])

  return <div>{articleDetails?.slug}</div>
}

export default ArticleDetails
