export interface IArticles {
  articles: IArticle[]
  articlesCount: number
}

export interface IArticle {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: IAuthor
}

export interface IAuthor {
  username: string
  bio: string
  image: string
  following: boolean
}

export interface ITags {
  tags: string[]
}

export interface ArticlesParamsValues {
  page: number
  tag?: string | null
}

export enum DownloadStatus {
  Loading = 'loading',
  Success = 'success',
  Error = 'error'
}
