import Container from "../../layouts/Container"
import Banner from "../Banner/Banner"
import Content from "../Content/Content"
import PopularTags from "../PopularTags/PopularTags"

const Main = () => {
  return (
    <>
      <Banner />
      <Container>
        <div className='md:flex md:flex-row-reverse gap-5 mt-5'>
          <PopularTags />
          <Content />
        </div>
      </Container>
    </>
  )
}

export default Main
