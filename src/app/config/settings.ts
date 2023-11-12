export const URL: string = 'https://api.realworld.io/api/'

export enum Endpoints {
  Articles = 'articles',
  Tags = 'tags'
}

export enum ArticlesParams {
  Tag = 'tag',
  Author = 'author',
  Favorited = 'favorited',
  Limit = 'limit',
  Offset = 'offset'
}
