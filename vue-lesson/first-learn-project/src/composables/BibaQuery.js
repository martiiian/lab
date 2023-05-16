import { useBibaApi } from './BibaApi.js'
import {useQuery} from 'vue-query'

export function useBibaAll() {
  const { BibaApi } = useBibaApi()

  return useQuery('bibas', () => BibaApi.lol())
}
