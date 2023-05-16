import { useAuthApi } from './AuthApi.js'

export function useLogin() {
  const { AuthApi } = useAuthApi()

  return {
    signIn: (body) => AuthApi.signin(body)
  }
}
