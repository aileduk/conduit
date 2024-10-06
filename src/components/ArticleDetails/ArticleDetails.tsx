import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"

import { Endpoints } from "../../consts/endpoints"
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import Container from "../../layouts/Container"
import { fetchArticleDetails, fetchCommentsForArticle } from "../../store/features/articlesSlice/api"
import ArticleBanner from "../ArticleBanner/ArticleBanner"
import CommentsList from "../CommentsList/CommentsList"
import Follow from "../Follow/Follow"
import Like from "../Like/Like"
import Loading from "../Loading/Loading"
import Tag from "../Tag/Tag"
import UserInfo from "../UserInfo/UserInfo"

const ArticleDetails = () => {
  const dispatch = useAppDispatch()
  const { slug } = useParams<string>()
  const { articleDetails, comments } = useAppSelector(state => state.articles)
console.log(comments);

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticleDetails(slug))
      dispatch(fetchCommentsForArticle(slug))
    }
  }, [dispatch, slug])

  if (!articleDetails) {
    return <Loading />
  }

  return (
    <>
      <ArticleBanner articleDetails={articleDetails} />
      <Container>
        <div className='pb-10 mb-10 border-b border-gray-300'>
          <p className='text-xl mb-10'>{articleDetails.body}</p>
          <ul className='flex gap-x-1 '>
            {articleDetails.tagList.map(tag => (
              <Tag tag={tag} key={tag} />
            ))}
          </ul>
        </div>
        <div className='flex items-center justify-center gap-x-2'>
          <div className='mr-7'>
            <UserInfo author={articleDetails?.author} date={articleDetails?.createdAt} />
          </div>
          <Follow author={articleDetails.author} />
          <Like like={articleDetails.favoritesCount} withText />
        </div>
      </Container>
      <Container width='max-w-screen-md'>
        <p className='flex gap-x-1 text-center my-5'>
          <Link to={Endpoints.Login} className='text-green-600 hover:underline'>
            Sign in
          </Link>
          or
          <Link to={Endpoints.Register} className='text-green-600 hover:underline'>
            sign up
          </Link>
          to add comments on this article.
        </p>
        <CommentsList comments={comments} />
      </Container>
    </>
  )
}

export default ArticleDetails
