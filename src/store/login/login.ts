import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'
import type { IAccount } from '@/types'
import { localCache } from '@/utils/cache'

const LOGIN_TOKEN = 'login/token'
const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: localCache.getCache(LOGIN_TOKEN) ?? '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      // 1.账号登录，获取token等信息
      const loginRes = await accountLoginRequest(account)
      console.log(loginRes)
      this.id = loginRes.data.id
      this.token = loginRes.data.token
      this.name = loginRes.data.name
      // 2. 进行本地缓存
      localCache.setCache(LOGIN_TOKEN, this.token)
    }
  }
})
export default useLoginStore
