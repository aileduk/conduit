import { FC } from "react"
import { Author } from "../../types/types"
import Follow from "../Follow/Follow"
import Container from "../../layouts/Container"

interface UserBannerProps {
  userDetails: Author
}
const UserBanner: FC<UserBannerProps> = ({ userDetails }) => {
  return (
    <section className='bg-gray-200 py-8 mb-5'>
      <Container width="max-w-screen-lg">
        <div className='flex flex-col items-center gap-y-3 '>
          <img className="w-24 h-24 aspect-square rounded-full" src={userDetails.image} alt={userDetails.username} />
          <h1 className='text-2xl font-bold'>{userDetails.username}</h1>
          <div className="self-end">
            <Follow author={userDetails} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default UserBanner
