import request from './request'

export function getWebsite() {
  return request({
    url: "/website"
  })
}