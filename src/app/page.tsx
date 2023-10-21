import Banner from '@/components/Banner'
import Container from '@/components/Container'
import Feed from '@/components/Feed'

const Home = () => {
  return (
    <main>
      <Banner />
      <Container>
        <Feed />
      </Container>
    </main>
  )
}

export default Home
