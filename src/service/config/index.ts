// export const BASE_URL = 'http://codercba.com:8000'
// export const TIME_OUT = 10000

// 1.区分开发环境和生产环境

// 2.代码逻辑判断，判断当前环境
// vite默认提供的环境变量
// console.log(import.meta.env.MODE)

let BASE_URL = ''
if (import.meta.env.PROD) {
  // 生产环境
  BASE_URL = 'http://152.136.185.210:4000'
} else {
  // 开发环境
  BASE_URL = 'http://152.136.185.210:5000'
}
// console.log(BASE_URL)
// 3.通过创建.env文件直接创建变量
// console.log(import.meta.env.VITE_URL)
export const TIME_OUT = 10000
export { BASE_URL }
