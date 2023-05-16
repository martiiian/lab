import {HttpCrud} from './HttpCrud.js'

export class HttpService {
  modules;
  constructor(baseUrl = 'https://fenrisu.ru', headers) {
    this.baseUrl = baseUrl
    this.headers = headers || {}
  }

  getUrl(uri) {
    return `${this.baseUrl}${uri}`
  }

  getFetchOptions(method, body, headers = {}) {
    const token = localStorage.getItem('accessToken')

    return {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined,
        ...this.headers,
        ...headers
      },
      body: body ? JSON.stringify(body): undefined
    }
  }

  register(modules) {
    for (const [moduleName, entityName] of Object.entries(modules)) {
      this[moduleName] = new HttpCrud(entityName, this)
    }
  }

  get(uri) {
    return fetch(this.getUrl(uri), this.getFetchOptions('GET'))
      .then(this.responseHandler)
      .catch((err) => this.catchUnauthorize(err))
  }

  async catchUnauthorize(err) {
    if (err.includes('401')) {
      // eslint-disable-next-line no-console
      console.log('before', this)
      const { accessToken, refreshToken } = await this.post(
        '/authentication/refresh-tokens',
        {
          refreshToken: localStorage.getItem('refreshToken')
        }
      )
      // eslint-disable-next-line no-console
      console.log(accessToken, refreshToken)
      localStorage.setItem('accessToken', accessToken)
      localStorage.setItem('refreshToken', refreshToken)
    }
  }

  responseHandler(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
  }

  post(uri, body) {
    return fetch(
      this.getUrl(uri),
      this.getFetchOptions('POST', body)
    )
      .then(this.responseHandler)
  }
  put() {

  }
  delete() {

  }
}

