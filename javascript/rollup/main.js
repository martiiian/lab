import { biba, lol } from './foo'
import exampleJson from './example.json'

import('./foo').then(({ biba, lol }) => {
  biba()

// eslint-disable-next-line no-console
  console.log(lol)
// eslint-disable-next-line no-console
  console.log(exampleJson)
})
