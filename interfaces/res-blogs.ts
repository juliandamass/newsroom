import { Blog } from "./blog";

export type ResBlogs = {
  data: Blog[]
  developer_message: string
  message: string
  page: number
  size: number
  total: number
}
