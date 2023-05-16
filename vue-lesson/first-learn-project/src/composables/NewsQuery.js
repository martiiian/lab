import { useNewsApi } from './NewsApi.js'
import {useQuery} from 'vue-query'

export function useNews() {
  const { NewsApi } = useNewsApi()

  return useQuery('news', () => NewsApi.all())
}
