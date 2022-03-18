const container = document.getElementsByClassName('container')[0]
const input = document.getElementById('select-input')
const itemsCount = 20

class Item {
  el: HTMLElement;
  highlighted: boolean;

  constructor(index) {
    this.el = this.create(index)
  }

  create(index) {
    const el = document.createElement('div')
    el.classList.add('child-item')
    el.innerText = String(index + 1)
    return el
  }

  static createItems(count) {
    return new Array(count)
      .fill('')
      .map((_, index) => new Item(index))
  }

  static renderItems(container, items) {
    container.append(...items.map(e => e.el))
  }

  scrollIntoView() {
    this.el.scrollIntoView({ behavior: 'smooth' })
  }

  highlight() {
    this.highlighted = true
    this.el.classList.add('child-item_active')
  }

  disableHighlight() {
    if (!this.highlighted) return

    this.highlighted = false
    this.el.classList.remove('child-item_active')
  }
}

const items = Item.createItems(itemsCount)
Item.renderItems(container, items)

function debounce(func, timeout = 400) {
  let timer;
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { func.apply(this, args) }, timeout)
  }
}

function selectItem(e: InputEvent) {
  const index = Number((e.target as HTMLInputElement).value)
  if (!index) return

  const item = items[index - 1]
  items.forEach((i) => i.disableHighlight())
  item.highlight()
  item.scrollIntoView()
}

input.addEventListener('input', debounce(selectItem))
