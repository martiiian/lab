import {inject} from 'vue'

class AuthApi {
  $api
  _instance

  constructor($api) {
    if (AuthApi._instance) {
      return AuthApi._instance
    }
    AuthApi._instance = this


    this.$api = $api
  }

  signin(body) {
    return this.$api.post('/authentication/sign-in', body)
  }
}

export function useAuthApi() {
  const $api = inject('$api')

  return {
    AuthApi: new AuthApi($api)
  }
}
