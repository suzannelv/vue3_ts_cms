// export const BASE_URL = 'http://codercba.com:8000'
// export const TIME_OUT = 10000

// 1.区分开发环境和生产环境

// 2.代码逻辑判断，判断当前环境
// vite默认提供的环境变量
console.log(import.meta.env.MODE)

let BASE_URL = ''
if (import.meta.env.MODE === 'production') {
  BASE_URL = 'http://codercba.prod:8000'
} else {
  BASE_URL = 'http://codercba.dev:8000'
}
console.log(BASE_URL)

export default TIME_OUT = 10000
export { BASE_URL }
