/**
 * Created by yangyang on 2017/6/26.
 */

export function fetchDomain(payload) {
  let times = payload.times
  if (times == 1) {
    return 'xiaojee.cn'
  }
  return 'lvyii.com'
}