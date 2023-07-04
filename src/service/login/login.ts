import hyRequest from '..'
// import { IAccount } from '@/types'
export function accountLoginRequest(account: any) {
  return hyRequest.post({
    url: '/login',
    data: account
  })
}
