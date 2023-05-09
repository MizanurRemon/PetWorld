export interface Users {
    data: Daum[]
    total: number
    page: number
    limit: number
  }
  
  export interface Daum {
    id: string
    title: string
    firstName: string
    lastName: string
    picture: string
  }
  