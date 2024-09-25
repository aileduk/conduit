import { FC } from "react"
import Container from "../../layouts/Container"
import { Article } from "../../types/types"
import Follow from "../Follow/Follow"
import Like from "../Like/Like"
import UserInfo from "../UserInfo/UserInfo"

interface ArticleBannerProps {
  articleDetails: Article
}

const ArticleBanner: FC<ArticleBannerProps> = ({ articleDetails }) => {
  return (
    <section className='bg-black/80 py-8 mb-5'>
      <Container>
        <h1 className='text-white text-5xl font-semibold mb-5'>{articleDetails?.title}</h1>
        <div className='flex items-center gap-x-2'>
          <div className='mr-7'>
            <UserInfo author={articleDetails?.author} date={articleDetails?.createdAt} usernameColor='text-white' />
          </div>
          <Follow author={articleDetails.author} />
          <Like like={articleDetails.favoritesCount} withText />
        </div>
      </Container>
    </section>
  )
}

export default ArticleBanner
