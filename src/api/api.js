import http from '../utils/http'
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = '/api/goldenTomatoEPG_mobile'
// 搜索接口
export function searchDataAPI(params) {
  return http.post(`${resquest}/search`, params)
}
//推荐位接口
export function recommendDataAPI(params) {
  return http.post(`${resquest}/recommend/list`, params)
}
