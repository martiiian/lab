export default class Pubsub {
  events: {
    [key: string]: ((data: any) => void)[]
  } = {}

  subscribe(event: string, callback: () => any) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = []
    }
    this.events[event].push(callback)
  }

  publish(event: string, data = {}) {
    if (!this.events.hasOwnProperty(event)) {
      return []
    }
    return this.events[event].map((callback) => callback(data))
  }
}
