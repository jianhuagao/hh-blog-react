// 开发环境
const devBaseURL = "http://121.4.115.182:7001/api/v1";
// 正式环境
const proBaseURL = "https://api.gaojianhua.top/api/v1";

//判断是生产环境还是正式环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

//超时配置
export const TIMEOUT = 30000;
