import request from './request'

export function getBlogTypes() {
  return request({
    url: '/blogType'
  })
}