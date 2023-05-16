export class HttpCrud {
  constructor(entity, apiService) {
    this.entity = entity
    this.$api = apiService
  }

  one(id) {
    return this.$api.get(`${this.entity}/${id}`)
  }

  all() {
    return this.$api.get(`/${this.entity}`)
  }

  remove() {

  }

  create() {

  }

  update() {

  }
}

