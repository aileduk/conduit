import Container from "../../layouts/Container"
import Banner from "../Banner/Banner"
import Content from "../Content/Content"
import PopularTags from "../PopularTags/PopularTags"

const Main = () => {
  return (
    <>
      <Banner />
      <Container>
        <div className='flex gap-5 mt-5'>
          <Content />
          <PopularTags />
        </div>
      </Container>
    </>
  )
}

export default Main
