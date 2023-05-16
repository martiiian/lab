import {inject} from 'vue'
import {HttpCrud} from '../api/HttpCrud.js'

class BibaApi extends HttpCrud {
  $api
  _instance

  constructor($api, entity = 'biba') {
    if (BibaApi._instance) {
      return BibaApi._instance
    }
    super(entity, $api)
    BibaApi._instance = this


    this.entity = entity
    this.$api = $api
  }

  lol() {
    return this.$api.get(`/${this.entity}/get401`)
  }
}

export function useBibaApi() {
  const $api = inject('$api')

  return {
    BibaApi: new BibaApi($api)
  }
}
