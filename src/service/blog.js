import request from './request'

export function getBlogTypes() {
  return request({
    url: '/blogType'
  })
}

export function getBlogList(type) {
  return request({
    url: '/blog',
    params: {
      type
    }
  })
}

export function getBlog(id) {
  return request({
    url: `/blog/${id}`
  })
}