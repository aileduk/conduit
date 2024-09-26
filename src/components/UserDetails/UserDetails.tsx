import { useEffect } from "react"
import { useParams } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks"
import Container from "../../layouts/Container"
import { fetchAuthorFeed, fetchUserDetails } from "../../store/features/articlesSlice/api"
import Article from "../Article/Article"
import ControlBar from "../ControlBar/ControlBar"
import Loading from "../Loading/Loading"
import UserBanner from "../UserBanner/UserBanner"

const UserDetails = () => {
  const dispatch = useAppDispatch()
  const { username } = useParams<string>()
  const { userDetails, authorFeed } = useAppSelector(state => state.articles)
  console.log(authorFeed)

  useEffect(() => {
    if (username) {
      dispatch(fetchAuthorFeed(username))
      dispatch(fetchUserDetails(username))
    }
  }, [dispatch, username])

  if (!userDetails) {
    return <Loading />
  }

  return (
    <>
      <UserBanner userDetails={userDetails} />
      <Container width="max-w-screen-lg">
        <ControlBar />
        <ul className='flex flex-col gap-y-5 mt-5'>
          {authorFeed.map(article => (
            <Article key={article.slug} article={article} />
          ))}
        </ul>
      </Container>
    </>
  )
}

export default UserDetails
