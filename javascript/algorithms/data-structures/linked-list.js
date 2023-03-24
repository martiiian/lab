class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
  }

  /**
   * @param {any} value - добавляемое значение
   */
  add(value) {
    const n = { value }

    if (!this.head) {
      this.head = n
      this.tail = n
    } else {
      this.tail.next = n
      this.tail = n
    }
  }

  /**
   * @param {any} value - искомое значение
   */
  contains(value) {
    let n = this.head

    while(n !== null && n.value != value) {
      n = n.next
    }

    return n !== null
  }

  *traverse() {
    let n = this.head
    while (n) {
      yield n.value
      n = n.next
    }
  }
}

const list = new LinkedList()
list.add('biba1')
list.add('biba2')
console.log('List contains biba2', list.contains('biba2'))
const listGenerator = list.traverse()
console.log('Get first', listGenerator.next().value)
console.log('Get first', listGenerator.next().value)


