import PubSub from './pubsub'

export interface StoreI {
  dispatch: (actionKey: string, payload: any) => boolean,
  commit: (mutationKey: string, payload: any) => boolean
}

interface StateI {
  items: string[]
}

export default class Store implements StoreI {
  actions: {[key: string]: (self: object, payload: any) => any} = {};
  mutations: {[key: string]: (self: object, payload: any) => any} = {};
  state: object = {};
  status: string = 'default state';
  events: any;

  constructor(params: {
    actions: {},
    mutations: {},
    state: {[key: string|symbol]: any}
  }) {
    let self = this
    self.actions = {}
    self.mutations = {}
    self.state = {}
    self.status = 'default state'
    self.events = new PubSub();
    if (params.hasOwnProperty('actions')) {
      self.actions = params.actions
    }

    if (params.hasOwnProperty('mutations')) {
      self.mutations = params.mutations
    }

    self.state = new Proxy((params.state || {}), {
      set(state, key, value) {
        state[key] = value
        self.events.publish('stateChange', self.state)

        if (self.status !== 'mutation') {
          console.warn('You should use mutation to set')
        }
        self.status = 'resting'
        return true
      }
    })
  }

  dispatch(actionKey: string, payload: any) {
    let self = this;
    if (typeof self.actions[actionKey] !== 'function') {
      console.error(`Action "${actionKey}" doesn't exist`)
      return false
    }
    console.groupCollapsed(`Action: ${actionKey}`)
    self.status = 'action';
    self.actions[actionKey](self, payload)
    console.groupEnd();
    return true
  }

  commit(mutationKey: string, payload: any) {
    let self = this;
    if (typeof self.mutations[mutationKey] !== 'function') {
      console.error(`Mutation "${mutationKey}" doesn't exist`);
      return false;
    }
    self.status = 'mutation';
    let newState = self.mutations[mutationKey](self.state, payload)
    self.state.items = newState.items
    return true
  }
}
