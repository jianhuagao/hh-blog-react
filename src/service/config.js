// 开发环境
const devBaseURL = "https://www.fastmock.site/mock/3ca29ccaec3108484d97a6ec856d63b0/hhblog";
// 正式环境
const proBaseURL = "https://www.fastmock.site/mock/3ca29ccaec3108484d97a6ec856d63b0/hhblog";

//判断是生产环境还是正式环境
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

//超时配置
export const TIMEOUT = 5000;
