import Store, { StoreI } from './store';

interface StateI {
  items: string[]
}

const store = new Store({
  actions: {
    addItem(context: StoreI, payload: any) {
      // eslint-disable-next-line no-console
      console.log(context.commit('addItem', payload));
    },
    clearItem(context: StoreI, payload: any) {
      context.commit('clearItem', payload);
    }
  },
  mutations: {
    addItem(state: StateI, payload: any) {
      state.items.push(payload)
      return state
    },
    clearItem(state: StateI, payload: any) {
      state.items.splice(payload.index, 1);
      return state
    }
  },
  state: {
    items: [
      'An example task. Delete or add your own',
      'Another example task. Delete or add your own'
    ]
  }
});


class SpanComponent {
  rootEl: HTMLElement
  el: HTMLElement|null = null
  constructor({ store, root }: { store: Store, root: HTMLElement }) {
    this.rootEl = root
    this.render({ items: []})
    store.events.subscribe('stateChange', (state: any) => this.render(state))
  }

  render({ items = [] }) {
    this.el = this.el || document.createElement('span')
    this.el.innerHTML = items.length ? items.join('_') : '01'
    this.rootEl.append(this.el)
  }
}

const root = document.getElementById('root')

if (root) {
  const span = new SpanComponent({ store, root })
  store.dispatch('addItem', 'new biba')
  setTimeout(() => {
    store.dispatch('addItem', 'new biba again')
  }, 2000)
}
