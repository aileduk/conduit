export type GlobalFeedResponse = {
  articles: Article[]
  articlesCount: number
}

export type Article = {
  slug: string
  body: string
  title: string
  description: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: Author
}

export type Comment = {
  id: string
  createdAt: string
  updatedAt: string
  body: string
  author: Author
}

export type Author = {
  username: string
  bio: string
  image: string
  following: boolean
}
