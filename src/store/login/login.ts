import { defineStore } from 'pinia'
import { accountLoginRequest } from '@/service/login/login'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    token: '',
    name: ''
  }),
  actions: {
    async loginAccountAction(account: any) {
      const loginRes = await accountLoginRequest(account)
      console.log(loginRes)
      this.id = loginRes.data.id
      this.token = loginRes.data.token
      this.nama = loginRes.data.name
    }
  }
})
export default useLoginStore
