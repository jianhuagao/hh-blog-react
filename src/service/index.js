import request from './request'

export function getBlogType(ids) {
  return request({
    url: '/song/detail',
    params: { ids }
  })
}
