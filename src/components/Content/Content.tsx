import ArticlesList from "../ArticlesList/ArticlesList"
import ControlBar from "../ControlBar/ControlBar"

const Content = () => {
  return (
    <section className='md:w-3/4 flex flex-col gap-y-5'>
      <ControlBar />
      <ArticlesList />
    </section>
  )
}

export default Content
