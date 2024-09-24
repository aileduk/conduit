import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import Container from "../../layouts/Container"
import { fetchArticleDetails } from "../../store/features/articlesSlice/api"
import Follow from "../Follow/Follow"
import Like from "../Like/Like"
import Loading from "../Loading/Loading"
import UserInfo from "../UserInfo/UserInfo"

const ArticleDetails = () => {
  const dispatch = useAppDispatch()
  const { slug } = useParams<string>()
  const { articleDetails } = useAppSelector(state => state.articles)

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticleDetails(slug))
    }
  }, [dispatch, slug])

  if (!articleDetails) {
    return <Loading />
  }
console.log(articleDetails);

  return (
    <>
      <section className='bg-black/80 py-8'>
        <Container>
          <h1 className='text-white text-5xl font-semibold mb-5'>{articleDetails?.title}</h1>
          <div className='flex items-center gap-x-2'>
            <div className="mr-7">
              <UserInfo author={articleDetails?.author} date={articleDetails?.createdAt} usernameColor='text-white' />
            </div>
            <Follow author={articleDetails.author} />
            <Like like={articleDetails.favoritesCount} />
          </div>
        </Container>
      </section>
      <p>{articleDetails.description}</p>
    </>
  )
}

export default ArticleDetails
