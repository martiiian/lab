import {inject} from 'vue'
import {HttpCrud} from '../api/HttpCrud'

class NewsApi extends HttpCrud {
  $api
  _instance

  constructor($api, entity = 'news') {
    if (NewsApi._instance) {
      return NewsApi._instance
    }
    super(entity, $api)
    NewsApi._instance = this


    this.$api = $api
    this.entity = entity
  }
}

export function useNewsApi() {
  const $api = inject('$api')

  return {
    NewsApi: new NewsApi($api)
  }
}
