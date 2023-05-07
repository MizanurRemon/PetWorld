export interface PostComment {
    data: Data[]
    total: number
    page: number
    limit: number
  }
  
  export interface Data {
    id: string
    message: string
    owner: Owner
    post: string
    publishDate: string
  }
  
  export interface Owner {
    id: string
    title: string
    firstName: string
    lastName: string
    picture: string
  }