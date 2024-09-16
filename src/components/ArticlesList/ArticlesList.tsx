import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { fetchGlobalFeed } from "../../store/features/articlesSlice/api"
import Article from "../Article/Article"

const ArticlesList = () => {
  const dispatch = useAppDispatch()
  const { globalFeed } = useAppSelector(state => state.articles)

  useEffect(() => {
    dispatch(fetchGlobalFeed())
  }, [dispatch])

  return (
    <ul>
      {globalFeed.map(article => (
        <Article key={article.slug} article={article} />
      ))}
    </ul>
  )
}

export default ArticlesList
