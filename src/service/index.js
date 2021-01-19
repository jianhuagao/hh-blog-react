import request from './request'

export function getBlogType() {
  return request({
    url: '/blogType'
  })
}
