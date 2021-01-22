import request from './request'

export function getBanners() {
  return request({
    url: "/banner"
  })
}