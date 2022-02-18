export type Blog = {
  id: number
  category: string
  title: string
  highlight: string
  content: string
  reading_time: number
  is_featured: boolean
  multi_res_images: {
    original: string
    big: string
    thumbnail: string
    small: string
  }
  sources: {
    name: string
    link: string
  },
  types: {
    name: string
  }
}
