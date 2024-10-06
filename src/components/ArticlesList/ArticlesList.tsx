import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { ARTICLES_PER_PAGE } from "../../consts/const"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import { fetchGlobalFeed } from "../../store/features/articlesSlice/api"
import Article from "../Article/Article"
import Paginate from "../Paginate/Paginate"

const ArticlesList = () => {
  const dispatch = useAppDispatch()
  const { globalFeed, globalFeedCount, offset } = useAppSelector(state => state.articles)
  const [searchParams] = useSearchParams()
  
  const tag = searchParams.get("tag") || ""

  useEffect(() => {
    dispatch(fetchGlobalFeed({ offset, tag }))
  }, [dispatch, offset, tag])

  return (
    <>
      <ul className='flex flex-col gap-y-5'>
        {globalFeed.map(article => (
          <Article key={article.slug} article={article} />
        ))}
      </ul>
      <Paginate articlesCount={globalFeedCount} articlesPerPage={ARTICLES_PER_PAGE} />
    </>
  )
}

export default ArticlesList
