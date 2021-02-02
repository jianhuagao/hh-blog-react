import request from './request'

export function getBanners() {
  return request({
    url: "/banner"
  })
}
export function getAreas() {
  return request({
    url: "/area"
  })
}

